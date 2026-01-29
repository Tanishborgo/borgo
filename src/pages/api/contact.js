import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const {
    personal_tax,
    sole_trader,
    company,
    name,
    business_name,
    phone_number,
    email,
    services,
    discuss,
  } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Borgo Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "New Contact Form Inquiry",
      html: `
        <h3>New Inquiry from Borgo Website</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Business:</b> ${business_name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone_number}</p>
        <p><b>Services:</b> ${
          services && services.length > 0 ? services.join(", ") : "None selected"
        }</p>
        <p><b>Personal Tax:</b> ${personal_tax ? "Yes" : "No"}</p>
        <p><b>Sole Trader:</b> ${sole_trader ? "Yes" : "No"}</p>
        <p><b>Company:</b> ${company ? "Yes" : "No"}</p>
        <p><b>Message:</b><br/>${discuss}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Email failed" });
  }
}
