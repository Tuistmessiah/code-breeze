import { NextResponse } from 'next/server';
import * as nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.info('Email (body):', body);

    const { name, email, message } = body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    console.info('Attempting to send email...');

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission from "${name}" by: ${email}`,
      text: message,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    const mailOptionsConfirm = {
      from: `"Code Breeze" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Your message was sent to Code Breeze :)`,
      text: `Dear ${name}, \n\n Your message was delivered to our email at ${process.env.EMAIL_USER}.
      \n\n We will contact you soon!
      \n\n Kind regards,
      \n Pedro Caetano (Code Breeze)`,
    };

    // Send the email
    await transporter.sendMail(mailOptionsConfirm);

    console.info('SUCCESS: Email sent!');
    return NextResponse.json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('ERROR: Error sending email:', error);
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
  }
}
