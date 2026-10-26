import nodemailer from "nodemailer";
import { randomUUID } from "node:crypto";
import { CONTACT } from "../data/site.js";

export async function sendRequest(
  request,
  kind,
  transportFactory = nodemailer.createTransport,
) {
  let body;
  try {
    const raw = await request.text();
    if (raw.length > 12000)
      return Response.json({ error: "Request is too large." }, { status: 413 });
    body = JSON.parse(raw);
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }
  if (!body || typeof body !== "object" || Array.isArray(body))
    return Response.json({ error: "Invalid request." }, { status: 400 });
  const limits = {
    name: 120,
    email: 254,
    phone: 40,
    medicineName: 200,
    quantity: 120,
    message: 3000,
  };
  const values = {};
  for (const [key, max] of Object.entries(limits)) {
    if (body[key] !== undefined && typeof body[key] !== "string")
      return Response.json({ error: "Invalid form fields." }, { status: 400 });
    values[key] = (body[key] || "").trim();
    if (values[key].length > max)
      return Response.json(
        { error: "Please shorten your form entries." },
        { status: 400 },
      );
  }
  if (body.website)
    return Response.json(
      { error: "Unable to process this request." },
      { status: 400 },
    );
  if (
    !values.name ||
    !values.medicineName ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email) ||
    /[\r\n]/.test(values.email)
  )
    return Response.json(
      {
        error:
          "Please enter your name, a valid email address and product name.",
      },
      { status: 400 },
    );
  if (
    !process.env.SMTP_PASS ||
    process.env.SMTP_PASS === "your_google_app_password_here"
  )
    return Response.json(
      {
        error: "Email is temporarily unavailable. Please contact us directly.",
      },
      { status: 503 },
    );
  const refCode = `MZW-${kind === "missing" ? "REQ" : "ORD"}-${randomUUID().slice(0, 8).toUpperCase()}`;
  try {
    const transport = transportFactory({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER || CONTACT.email,
        pass: process.env.SMTP_PASS,
      },
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 15000,
    });
    const result = await transport.sendMail({
      from: {
        name: "Medzwall",
        address: process.env.SMTP_USER || CONTACT.email,
      },
      to: CONTACT.email,
      replyTo: values.email,
      subject: `Medzwall ${kind === "missing" ? "missing product request" : "order"} [${refCode}]`,
      text: [
        `Reference: ${refCode}`,
        `Request: ${kind === "missing" ? "Missing product" : "Order"}`,
        ...Object.entries(values).map(
          ([key, value]) => `${key}: ${value || "Not provided"}`,
        ),
      ].join("\n\n"),
    });
    if (!result.accepted?.length) throw new Error("Recipient not accepted");
    return Response.json({ success: true, refCode });
  } catch {
    return Response.json(
      {
        error:
          "Your request could not be sent. Please try again or contact us directly.",
      },
      { status: 502 },
    );
  }
}
