'use server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
export default async function sendEmail(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;
  const subject = formData.get('subject') as string;

  const result = await resend.emails.send({
    from: `${name} <mail@darkalpha.ir>`,
    to: [process.env.EMAIL_TO!],
    subject,
    replyTo: email,
    text: message,
  });
  return result;
}
