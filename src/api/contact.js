// Vercel serverless function for contact form
// This file should be moved to /api/contact.js in the project root for Vercel deployment

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Here you would integrate with an email service like SendGrid, Mailgun, etc.
  // For now, we'll just log it and return success

  console.log('Contact form submission:', { name, email, message });

  // TODO: Send email to owner
  // Example with SendGrid:
  // const sgMail = require('@sendgrid/mail');
  // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  // const msg = { to: 'owner@example.com', from: email, subject: `Contact from ${name}`, text: message };
  // await sgMail.send(msg);

  res.status(200).json({ success: true, message: 'Message sent successfully' });
}
