import test from "node:test";
import assert from "node:assert/strict";
import { sendRequest } from "../lib/send-request.js";
import { CONTACT } from "../data/site.js";
const fields = {
  name: "Test Customer",
  email: "customer@example.com",
  medicineName: "Test product",
  quantity: "2 packs",
  message: "<b>Literal text</b>",
};
function request(data = fields) {
  return new Request("http://localhost/api/send-enquiry", {
    method: "POST",
    body: JSON.stringify(data),
  });
}
test("form validation and SMTP outcomes", async () => {
  const original = process.env.SMTP_PASS;
  try {
    delete process.env.SMTP_PASS;
    assert.equal((await sendRequest(request(), "order")).status, 503);
    for (const data of [
      null,
      [],
      {},
      { ...fields, email: "bad" },
      { ...fields, medicineName: "" },
      { ...fields, name: 123 },
      { ...fields, message: "a".repeat(3001) },
      { ...fields, website: "spam" },
    ])
      assert.equal((await sendRequest(request(data), "order")).status, 400);
    assert.equal(
      (
        await sendRequest(
          new Request("http://localhost", { method: "POST", body: "{" }),
          "order",
        )
      ).status,
      400,
    );
    process.env.SMTP_PASS = "test-only";
    for (const kind of ["order", "missing"]) {
      let mail;
      const response = await sendRequest(request(), kind, () => ({
        sendMail: async (input) => {
          mail = input;
          return { accepted: [CONTACT.email] };
        },
      }));
      assert.equal(response.status, 200);
      assert.equal((await response.json()).success, true);
      assert.equal(mail.to, CONTACT.email);
      assert.equal(mail.replyTo, fields.email);
      assert.ok(
        mail.subject.includes(
          kind === "order" ? "order" : "missing product",
        ),
      );
      assert.ok(mail.text.includes(fields.message));
      assert.equal(mail.html, undefined);
    }
    assert.equal(
      (
        await sendRequest(request(), "order", () => ({
          sendMail: async () => {
            throw new Error("SMTP unavailable");
          },
        }))
      ).status,
      502,
    );
    assert.equal(
      (
        await sendRequest(request(), "missing", () => ({
          sendMail: async () => ({ accepted: [] }),
        }))
      ).status,
      502,
    );
  } finally {
    if (original === undefined) delete process.env.SMTP_PASS;
    else process.env.SMTP_PASS = original;
  }
});
