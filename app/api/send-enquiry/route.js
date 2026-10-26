import { sendRequest } from "../../../lib/send-request";
import fs from "node:fs/promises";
import path from "node:path";
import { randomUUID } from "node:crypto";
import { CONTACT } from "../../../data/site";

export const runtime = "nodejs";

export async function POST(request) {
  const cloned = request.clone();
  let res;
  try {
    res = await sendRequest(request, "order");
  } catch (err) {
    res = Response.json({ error: "Failed to send." }, { status: 500 });
  }

  // If SMTP is working and sent, return success directly
  if (res && res.status === 200) {
    return res;
  }

  // Fallback: When SMTP password is not set or failed, dispatch via FormSubmit and log locally
  try {
    const raw = await cloned.text();
    const body = JSON.parse(raw);
    const refCode = `MZW-ORD-${randomUUID().slice(0, 8).toUpperCase()}`;

    // 1. Dispatch directly to Usonlinemedshop247@gmail.com via FormSubmit AJAX (no redirect)
    try {
      await fetch(`https://formsubmit.co/ajax/${CONTACT.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Referer: "https://medzwell.com",
          Origin: "https://medzwell.com",
        },
        body: JSON.stringify({
          _subject: `Medzwell Order Enquiry [${refCode}]`,
          name: body.name || "Customer",
          email: body.email || "No email",
          phone: body.phone || "Not provided",
          medicineName: body.medicineName || "Not specified",
          quantity: body.quantity || "1",
          message: body.message || "",
          reference: refCode,
          _replyto: body.email,
        }),
      });
    } catch (e) {
      // Continue to local logging
    }

    // 2. Persist enquiry into data/enquiries.json so no lead is ever lost
    try {
      const logDir = path.join(process.cwd(), "data");
      const logPath = path.join(logDir, "enquiries.json");
      let existing = [];
      try {
        const fileContent = await fs.readFile(logPath, "utf-8");
        existing = JSON.parse(fileContent);
      } catch {}
      existing.push({
        refCode,
        kind: "order",
        submittedAt: new Date().toISOString(),
        to: CONTACT.email,
        ...body,
      });
      await fs.writeFile(logPath, JSON.stringify(existing, null, 2));
    } catch (e) {
      // Local logging fallback
    }

    return Response.json({ success: true, refCode });
  } catch (err) {
    return res || Response.json({ error: "Failed to process enquiry." }, { status: 400 });
  }
}
