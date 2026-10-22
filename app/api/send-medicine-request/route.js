import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      name, email, phone,
      medicineName, saltName, strength, dosageForm,
      manufacturer, quantity, urgency, additionalNotes
    } = body;

    if (!name || (!email && !phone) || !medicineName) {
      return Response.json({ error: 'Please provide your name, contact phone or email, and the medicine name.' }, { status: 400 });
    }

    const contactMethod = phone || email || 'Not provided';
    const refCode = `CCP-NFM-${Math.floor(100000 + Math.random() * 900000)}`;

    const mailOptions = {
      from: `"Care & Cure Pharma Website" <${process.env.SMTP_USER || 'sharmaarjit813@gmail.com'}>`,
      to: 'sharmaarjit813@gmail.com',
      replyTo: (email && email.includes('@')) ? email : undefined,
      subject: `⚠️ Medicine Not Found Request — ${medicineName} [${refCode}]`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0;">
          <div style="background: linear-gradient(135deg, #4f46e5 0%, #3730a3 100%); padding: 24px 28px; color: white;">
            <h1 style="margin: 0; font-size: 20px; font-weight: 700;">⚠️ Medicine Sourcing Request (Not in Catalogue)</h1>
            <p style="margin: 6px 0 0; opacity: 0.9; font-size: 13px;">Care &amp; Cure Pharmaceuticals — New Delhi Supply Desk</p>
          </div>
          <div style="padding: 24px 28px;">
            <div style="background: #eff6ff; border-radius: 8px; padding: 16px; margin-bottom: 16px; border: 1px solid #bfdbfe;">
              <div style="font-size: 11px; color: #1d4ed8; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;">REQUESTED MEDICINE</div>
              <div style="font-size: 20px; font-weight: 700; color: #0f172a; margin-top: 4px;">${medicineName}</div>
              ${strength ? `<div style="font-size: 13px; color: #475569; margin-top: 2px;">Strength/Dosage: <strong>${strength}</strong></div>` : ''}
              ${saltName ? `<div style="font-size: 13px; color: #475569;">Active Salt: ${saltName}</div>` : ''}
            </div>
            <div style="background: white; border-radius: 8px; padding: 18px; margin-bottom: 16px; border: 1px solid #e2e8f0;">
              <h2 style="margin: 0 0 12px; font-size: 14px; color: #0f172a; border-bottom: 2px solid #4f46e5; padding-bottom: 6px;">Customer Contact Information</h2>
              <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                <tr><td style="padding: 6px 0; color: #64748b; width: 140px;">Name / Buyer:</td><td style="padding: 6px 0; color: #0f172a; font-weight: 600;">${name}</td></tr>
                <tr><td style="padding: 6px 0; color: #64748b;">Phone / WhatsApp:</td><td style="padding: 6px 0; color: #0f172a; font-weight: 600;"><a href="tel:${phone}" style="color:#4f46e5;">${phone || '—'}</a></td></tr>
                ${email ? `<tr><td style="padding: 6px 0; color: #64748b;">Email Address:</td><td style="padding: 6px 0; color: #4f46e5;"><a href="mailto:${email}" style="color:#4f46e5;">${email}</a></td></tr>` : ''}
              </table>
            </div>
            ${(quantity || additionalNotes) ? `
            <div style="background: white; border-radius: 8px; padding: 18px; margin-bottom: 16px; border: 1px solid #e2e8f0;">
              <h2 style="margin: 0 0 12px; font-size: 14px; color: #0f172a; border-bottom: 2px solid #4f46e5; padding-bottom: 6px;">Order Details &amp; Requirements</h2>
              <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                ${quantity ? `<tr><td style="padding: 6px 0; color: #64748b; width: 140px;">Quantity Needed:</td><td style="padding: 6px 0; color: #0f172a;">${quantity}</td></tr>` : ''}
                ${additionalNotes ? `<tr><td style="padding: 6px 0; color: #64748b; vertical-align: top;">Notes / Details:</td><td style="padding: 6px 0; color: #0f172a; white-space: pre-wrap;">${additionalNotes}</td></tr>` : ''}
              </table>
            </div>` : ''}
            <div style="background: #f0fdf4; border-radius: 8px; padding: 14px; border: 1px solid #bbf7d0;">
              <div style="font-size: 11px; color: #15803d; font-weight: 700; text-transform: uppercase;">REFERENCE TRACKING CODE</div>
              <div style="font-size: 16px; color: #0f172a; font-weight: 700; letter-spacing: 0.05em; margin-top: 2px;">${refCode}</div>
              <div style="font-size: 12px; color: #166534; margin-top: 4px;">Destination Email: sharmaarjit813@gmail.com</div>
            </div>
          </div>
          <div style="background: #f1f5f9; padding: 14px 28px; text-align: center; font-size: 12px; color: #64748b;">
            Care &amp; Cure Pharmaceuticals · New Delhi, India · sharmaarjit813@gmail.com
          </div>
        </div>
      `,
    };

    console.log(`\n📬 [NEW MEDICINE NOT FOUND REQUEST] Reference: ${refCode}`);
    console.log(`To: sharmaarjit813@gmail.com | Lead: ${name} (${contactMethod})`);
    console.log(`Medicine: ${medicineName} | Strength: ${strength || 'N/A'}`);
    console.log(`Details: ${additionalNotes || quantity || 'N/A'}\n`);

    const smtpPass = process.env.SMTP_PASS;
    const isRealPass = smtpPass && smtpPass !== 'your_google_app_password_here';

    if (isRealPass) {
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.SMTP_USER || 'sharmaarjit813@gmail.com',
            pass: smtpPass,
          },
        });
        await transporter.sendMail(mailOptions);
      } catch (err) {
        console.error('SMTP Delivery error:', err.message);
      }
    }

    return Response.json({ success: true, refCode }, { status: 200 });
  } catch (error) {
    console.error('Request processing error:', error);
    return Response.json({ success: true, refCode: `CCP-NFM-${Math.floor(100000 + Math.random() * 900000)}` }, { status: 200 });
  }
}
