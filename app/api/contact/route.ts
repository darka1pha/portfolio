import { contactFormSchema } from '@/lib/utils/validation';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = contactFormSchema.parse(body);
    
    // Here you would typically send email or save to database
    console.log('Contact form submission:', validatedData);
    
    return NextResponse.json({ message: 'Message sent successfully' });
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid form data' },
      { status: 400 }
    );
  }
}