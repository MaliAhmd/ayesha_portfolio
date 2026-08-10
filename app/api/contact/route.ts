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

    let gmailUser = (process.env.GMAIL_USER || process.env.Username || "ma4535230@gmail.com").trim();
    if (!gmailUser.includes("@")) {
      gmailUser = "ma4535230@gmail.com";
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
      subject: `New Portfolio Inquiry from ${name} (${service})`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Portfolio Inquiry</title>
        </head>
        <body style="margin: 0; padding: 20px 0; background-color: #e5e0d8; font-family: 'Segoe UI', Arial, sans-serif;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
            <tr>
              <td align="center">
                <table role="presentation" width="100%" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 2.5px solid #201a18; border-radius: 20px; overflow: hidden; box-shadow: 0 10px 30px rgba(32, 26, 24, 0.15);" cellspacing="0" cellpadding="0" border="0">
                  
                  <!-- HEADER BANNER -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #ee4b56 0%, #c93b45 100%); padding: 32px 24px; text-align: center; border-bottom: 2.5px solid #201a18;">
                      <div style="display: inline-block; padding: 4px 14px; background-color: rgba(32, 26, 24, 0.2); border-radius: 50px; font-size: 11px; font-weight: bold; color: #ffffff; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 8px;">
                        Let's Connect Inquiry
                      </div>
                      <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 900; text-transform: uppercase; letter-spacing: 1px;">
                        NEW PORTFOLIO INQUIRY
                      </h1>
                    </td>
                  </tr>

                  <!-- BODY CONTENT -->
                  <tr>
                    <td style="padding: 28px 24px; background-color: #f7f4ed;">
                      
                      <!-- INTRO MSG -->
                      <div style="margin-bottom: 24px; background-color: #ffffff; padding: 16px; border-radius: 12px; border: 1.5px solid #201a18; font-size: 14px; color: #201a18;">
                        You have received a new project inquiry through your portfolio website contact form.
                      </div>

                      <!-- SENDER DETAILS TABLE -->
                      <table width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-bottom: 24px; background-color: #ffffff; border-radius: 14px; border: 1.5px solid #201a18; overflow: hidden;">
                        
                        <tr style="border-bottom: 1px solid #e5e0d8;">
                          <td style="padding: 12px 16px; font-size: 12px; font-weight: bold; color: #ee4b56; text-transform: uppercase; letter-spacing: 0.5px; width: 130px; background-color: #faf8f5;">
                            Sender Name
                          </td>
                          <td style="padding: 12px 16px; font-size: 14px; font-weight: 700; color: #201a18;">
                            ${name}
                          </td>
                        </tr>

                        <tr style="border-bottom: 1px solid #e5e0d8;">
                          <td style="padding: 12px 16px; font-size: 12px; font-weight: bold; color: #ee4b56; text-transform: uppercase; letter-spacing: 0.5px; background-color: #faf8f5;">
                            Sender Email
                          </td>
                          <td style="padding: 12px 16px; font-size: 14px; font-weight: 700; color: #201a18;">
                            <a href="mailto:${email}" style="color: #ee4b56; text-decoration: underline;">${email}</a>
                          </td>
                        </tr>

                        <tr style="border-bottom: 1px solid #e5e0d8;">
                          <td style="padding: 12px 16px; font-size: 12px; font-weight: bold; color: #ee4b56; text-transform: uppercase; letter-spacing: 0.5px; background-color: #faf8f5;">
                            Area of Interest
                          </td>
                          <td style="padding: 12px 16px; font-size: 14px; font-weight: 600; color: #201a18;">
                            ${service}
                          </td>
                        </tr>

                        <tr>
                          <td style="padding: 12px 16px; font-size: 12px; font-weight: bold; color: #ee4b56; text-transform: uppercase; letter-spacing: 0.5px; background-color: #faf8f5;">
                            Timeline / Budget
                          </td>
                          <td style="padding: 12px 16px; font-size: 14px; font-weight: 600; color: #201a18;">
                            ${budget}
                          </td>
                        </tr>

                      </table>

                      <!-- MESSAGE BOX -->
                      <div style="background-color: #ffffff; padding: 20px; border-radius: 14px; border: 1.5px solid #201a18; margin-bottom: 24px;">
                        <div style="font-size: 11px; font-weight: bold; color: #ee4b56; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px;">
                          CLIENT MESSAGE
                        </div>
                        <div style="font-size: 14px; line-height: 1.6; color: #201a18; white-space: pre-wrap; font-family: inherit;">
${message}
                        </div>
                      </div>

                      <!-- DIRECT REPLY CTA BUTTON -->
                      <div style="text-align: center; margin-top: 10px;">
                        <a href="mailto:${email}" style="display: inline-block; padding: 14px 32px; background-color: #ee4b56; color: #ffffff; font-size: 14px; font-weight: 800; text-decoration: none; border-radius: 50px; border: 2px solid #201a18; box-shadow: 0 4px 10px rgba(238, 75, 86, 0.3); text-transform: uppercase; letter-spacing: 1px;">
                          Reply to ${name} →
                        </a>
                      </div>

                    </td>
                  </tr>

                  <!-- CLEAN FOOTER -->
                  <tr>
                    <td style="background-color: #201a18; padding: 16px 24px; text-align: center; font-size: 12px; color: rgba(255,255,255,0.7); border-top: 2px solid #201a18;">
                      <span style="color: #ffffff; font-weight: 700;">Ayesha Arshad Khan</span> Portfolio Contact System
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
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
