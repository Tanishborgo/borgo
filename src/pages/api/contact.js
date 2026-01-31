import nodemailer from "nodemailer";

const isNonEmptyString = (value) => typeof value === "string" && value.trim().length > 0;
const isValidEmail = (value) =>
  typeof value === "string" &&
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({
      message: "Method not allowed",
      error: "Only POST is supported",
    });
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

  // Server-side validation
  const errors = {};

  if (!isNonEmptyString(name)) errors.name = "Name is required";
  if (!isNonEmptyString(business_name)) errors.business_name = "Business name is required";
  if (!isNonEmptyString(phone_number)) errors.phone_number = "Phone number is required";
  if (!isValidEmail(email)) errors.email = "Valid email is required";
  if (!Array.isArray(services) || services.length === 0) {
    errors.services = "At least one service is required";
  }
  if (!isNonEmptyString(discuss)) errors.discuss = "Message is required";

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({
      message: "Validation failed",
      errors,
    });
  }

  // Check environment variables
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error("EMAIL_USER or EMAIL_PASS not configured");
    return res.status(500).json({
      message: "Server misconfiguration",
      error: "Email service not configured",
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `Borgo Website <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "New Contact Form Inquiry",
      html: `
        <h3>New Inquiry from Borgo Website</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Business:</b> ${business_name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone_number}</p>
        <p><b>Services:</b> ${services && services.length > 0 ? services.join(", ") : 'None selected'}</p>
        <p><b>Personal Tax:</b> ${personal_tax === true ? 'Yes' : 'No'}</p>
        <p><b>Sole Trader:</b> ${sole_trader === true ? 'Yes' : 'No'}</p>
        <p><b>Company:</b> ${company === true ? 'Yes' : 'No'}</p>
        <p><b>Message:</b><br/>${discuss}</p>
      `,
    });

    return res.status(200).json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return res.status(500).json({
      message: "Email failed",
      error: "Failed to send email. Please try again.",
    });
  }
}
