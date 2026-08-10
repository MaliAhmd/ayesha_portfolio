import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, service, budget, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    let gmailUser = (process.env.GMAIL_USER || process.env.Username || "aliahmadm754@gmail.com").trim();
    if (!gmailUser.includes("@")) {
      gmailUser = "aliahmadm754@gmail.com";
    }

    let gmailPass = (process.env.GMAIL_PASS || process.env.Password || "cipo hsnf rfqy uran")
      .replace(/["']/g, "")
      .replace(/\s+/g, "")
      .trim();

    const recipientEmail = (process.env.CONTACT_RECIPIENT_EMAIL || "kayesha2614@gmail.com").trim();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for port 465, false for 587
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    const mailOptions = {
      from: `"Portfolio Contact Form" <${gmailUser}>`,
      to: recipientEmail,
      replyTo: email,
      subject: `New Portfolio Message from ${name} (${service})`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 2px solid #201a18; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
          <div style="background-color: #ee4b56; padding: 24px; text-align: center; border-bottom: 2px solid #201a18;">
            <h2 style="color: #ffffff; margin: 0; font-size: 22px; text-transform: uppercase; letter-spacing: 1px;">New Portfolio Inquiry</h2>
          </div>
          <div style="padding: 24px; background-color: #f7f4ed;">
            <p style="font-size: 14px; color: #201a18; margin-bottom: 16px;">You have received a new message from the portfolio <strong>Let's Connect</strong> form.</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px; color: #201a18;">
              <tr style="border-bottom: 1px solid rgba(32,26,24,0.15);">
                <td style="padding: 10px 0; font-weight: bold; width: 140px;">Sender Name:</td>
                <td style="padding: 10px 0;">${name}</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(32,26,24,0.15);">
                <td style="padding: 10px 0; font-weight: bold;">Sender Email:</td>
                <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #ee4b56; text-decoration: none; font-weight: bold;">${email}</a></td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(32,26,24,0.15);">
                <td style="padding: 10px 0; font-weight: bold;">Area of Interest:</td>
                <td style="padding: 10px 0;">${service}</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(32,26,24,0.15);">
                <td style="padding: 10px 0; font-weight: bold;">Timeline:</td>
                <td style="padding: 10px 0;">${budget}</td>
              </tr>
            </table>

            <div style="background-color: #ffffff; padding: 16px; border-radius: 12px; border: 1.5px solid #201a18;">
              <p style="font-weight: bold; margin-top: 0; margin-bottom: 8px; color: #201a18; font-size: 13px; text-transform: uppercase;">Message Content:</p>
              <p style="white-space: pre-wrap; margin: 0; color: #201a18; font-size: 14px; line-height: 1.6;">${message}</p>
            </div>
          </div>
          <div style="background-color: #201a18; padding: 12px 24px; text-align: center; font-size: 11px; color: #ffffff;">
            This email was automatically sent via Nodemailer from your Portfolio Website.
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent successfully!" });
  } catch (error: any) {
    console.error("Nodemailer API Error:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to send email. Please try again." },
      { status: 500 }
    );
  }
}
