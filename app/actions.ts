'use server';

import * as z from 'zod';
import nodemailer from 'nodemailer';

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function submitContactForm(values: z.infer<typeof formSchema>) {
  const validatedFields = formSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      success: false,
      error: 'Invalid fields.',
    };
  }

  const { name, email, message } = validatedFields.data;

  const transporter = nodemailer.createTransport({
    service: 'gmail', // O el proveedor que uses (Outlook, etc.)
    auth: {
      user: process.env.EMAIL_USER, // Tu dirección de correo
      pass: process.env.EMAIL_PASS, // La contraseña de aplicación que generes
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: 'jesusgutierrezgarcia1989@gmail.com',
      subject: `Nuevo mensaje de contacto de ${name}`,
      text: message,
      html: `
        <h1>Nuevo mensaje de contacto</h1>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    });

    console.log('Form submitted:', validatedFields.data);
    return { success: true };

  } catch (error) {
    console.error('Error sending email:', error);
    return {
      success: false,
      error: 'Failed to send email.',
    };
  }
}
