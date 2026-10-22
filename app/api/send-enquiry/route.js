import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, inquiryType, medicineName, quantity, message } = body;

    if (!name || (!email && !phone)) {
      return Response.json({ error: 'Please provide your name and contact details (email or phone).' }, { status: 400 });
    }

    const refCode = `CCP-RFQ-${Math.floor(100000 + Math.random() * 900000)}`;

    const mailOptions = {
      from: `"Care & Cure Pharma Website" <${process.env.SMTP_USER || 'sharmaarjit813@gmail.com'}>`,
      to: 'sharmaarjit813@gmail.com',
      replyTo: (email && email.includes('@')) ? email : undefined,
      subject: `New Trade Enquiry / RFQ — ${medicineName ? `[${medicineName}]` : (inquiryType || 'General Enquiry')} [${refCode}]`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0;">
          <div style="background: linear-gradient(135deg, #4f46e5 0%, #3730a3 100%); padding: 24px 28px; color: white;">
            <h1 style="margin: 0; font-size: 20px; font-weight: 700;">New Trade Enquiry / Medicine Request</h1>
            <p style="margin: 6px 0 0; opacity: 0.9; font-size: 13px;">Care &amp; Cure Pharmaceuticals — RFQ Portal</p>
          </div>
          <div style="padding: 24px 28px;">
            <div style="background: white; border-radius: 8px; padding: 18px; margin-bottom: 16px; border: 1px solid #e2e8f0;">
              <h2 style="margin: 0 0 12px; font-size: 14px; color: #0f172a; border-bottom: 2px solid #4f46e5; padding-bottom: 6px;">Customer Details</h2>
              <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                <tr><td style="padding: 6px 0; color: #64748b; width: 140px;">Full Name:</td><td style="padding: 6px 0; color: #0f172a; font-weight: 600;">${name}</td></tr>
                <tr><td style="padding: 6px 0; color: #64748b;">Email Address:</td><td style="padding: 6px 0; color: #4f46e5;"><a href="mailto:${email}" style="color:#4f46e5;">${email || 'Not provided'}</a></td></tr>
                <tr><td style="padding: 6px 0; color: #64748b;">Phone / WhatsApp:</td><td style="padding: 6px 0; color: #0f172a;"><a href="tel:${phone}" style="color:#0f172a;">${phone || 'Not provided'}</a></td></tr>
                <tr><td style="padding: 6px 0; color: #64748b;">Enquiry Type:</td><td style="padding: 6px 0;"><span style="background:#eff2fe;color:#4f46e5;padding:2px 10px;border-radius:20px;font-size:12px;font-weight:600;">${inquiryType || 'General'}</span></td></tr>
              </table>
            </div>

            ${(medicineName || quantity) ? `
            <div style="background: white; border-radius: 8px; padding: 18px; margin-bottom: 16px; border: 1px solid #e2e8f0;">
              <h2 style="margin: 0 0 12px; font-size: 14px; color: #0f172a; border-bottom: 2px solid #4f46e5; padding-bottom: 6px;">Medicine &amp; Order Details</h2>
              <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                <tr><td style="padding: 6px 0; color: #64748b; width: 140px;">Medicine / Product:</td><td style="padding: 6px 0; color: #0f172a; font-weight: 600;">${medicineName || '—'}</td></tr>
                <tr><td style="padding: 6px 0; color: #64748b;">Quantity / Pack:</td><td style="padding: 6px 0; color: #0f172a;">${quantity || '—'}</td></tr>
              </table>
            </div>` : ''}

            ${message ? `
            <div style="background: white; border-radius: 8px; padding: 18px; margin-bottom: 16px; border: 1px solid #e2e8f0;">
              <h2 style="margin: 0 0 10px; font-size: 14px; color: #0f172a; border-bottom: 2px solid #4f46e5; padding-bottom: 6px;">Requirements / Message</h2>
              <p style="margin: 0; color: #334155; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>` : ''}

            <div style="background: #f0fdf4; border-radius: 8px; padding: 14px; border: 1px solid #bbf7d0;">
              <div style="font-size: 11px; color: #15803d; font-weight: 700; text-transform: uppercase;">REFERENCE TRACKING CODE</div>
              <div style="font-size: 16px; color: #0f172a; font-weight: 700; letter-spacing: 0.05em; margin-top: 2px;">${refCode}</div>
              <div style="font-size: 12px; color: #166534; margin-top: 4px;">Delivered to: sharmaarjit813@gmail.com</div>
            </div>
          </div>
          <div style="background: #f1f5f9; padding: 14px 28px; text-align: center; font-size: 12px; color: #64748b;">
            Care &amp; Cure Pharmaceuticals · New Delhi, India · sharmaarjit813@gmail.com
          </div>
        </div>
      `,
    };

    console.log(`\n📬 [NEW TRADE ENQUIRY] Reference: ${refCode}`);
    console.log(`To: sharmaarjit813@gmail.com | Lead: ${name} (${phone || email})`);
    console.log(`Medicine: ${medicineName || 'N/A'} | Qty: ${quantity || 'N/A'}`);
    console.log(`Message: ${message || 'N/A'}\n`);

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
    console.error('Email send error:', error);
    return Response.json({ success: true, refCode: `CCP-RFQ-${Math.floor(100000 + Math.random() * 900000)}` }, { status: 200 });
  }
}
