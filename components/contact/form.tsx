'use client';

import { z } from 'zod';
import {
  Form as FormProvider,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormControl,
} from '../ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { sendEmail } from '@/lib/actions';
import SubmitButton from '../shared/submitButton';
import { Toaster } from '../ui/toaster';
import { useToast } from '@/hooks/use-toast';
import { FadeIn } from '@/components/animations';

const formSchema = z.object({
  name: z
    .string({ required_error: 'Name is required' })
    .min(2, { message: 'Name must be at least 2 characters' })
    .max(50, { message: 'Name cannot exceed 50 characters' }),
  email: z
    .string({ required_error: 'Email is required' })
    .email({ message: 'Please enter a valid email address' }),
  subject: z
    .string({ required_error: 'Subject is required' })
    .min(2, { message: 'Subject must be at least 2 characters' })
    .max(100, { message: 'Subject cannot exceed 100 characters' }),
  message: z
    .string({ required_error: 'Message is required' })
    .min(10, { message: 'Message must be at least 10 characters' }),
});

export default function ContactForm() {
  const toast = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    mode: 'onTouched',
  });

  const formActions = async (formData: FormData) => {
    const isComplete = await form.trigger();

    if (isComplete) {
      try {
        const res = await sendEmail(formData);
        if (res?.data?.id) {
          toast.toast({
            title: 'Message Dispatched',
            description: 'Thank you for reaching out! I will reply within 24 hours.',
          });
          form.reset();
        } else {
          toast.toast({
            title: 'Notice',
            description: 'Thank you! If email server does not respond, feel free to write to abolfazl.omrani1999@gmail.com directly.',
            variant: 'default',
          });
        }
      } catch (err) {
        toast.toast({
          title: 'Direct Email Available',
          description: 'Could not send via automated gateway. Please email abolfazl.omrani1999@gmail.com',
          variant: 'destructive',
        });
      }
    }
  };

  return (
    <FadeIn delay={0.15}>
      <div className='glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl'>
        <div className='mb-8'>
          <h3 className='text-2xl font-bold text-white mb-2'>Send a Message</h3>
          <p className='text-xs sm:text-sm text-zinc-400'>
            Fill in the details below. All inquiries are received directly in my primary inbox.
          </p>
        </div>

        <FormProvider {...form}>
          <form className='space-y-6' action={formActions}>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-xs font-semibold uppercase tracking-wider text-zinc-300'>
                      Your Name
                    </FormLabel>
                    <FormControl>
                      <Input placeholder='e.g., Alex Johnson' {...field} />
                    </FormControl>
                    <FormMessage className='text-xs text-rose-400' />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-xs font-semibold uppercase tracking-wider text-zinc-300'>
                      Email Address
                    </FormLabel>
                    <FormControl>
                      <Input
                        type='email'
                        placeholder='e.g., alex@company.com'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className='text-xs text-rose-400' />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name='subject'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-xs font-semibold uppercase tracking-wider text-zinc-300'>
                    Subject / Project Scope
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder='e.g., Next.js Web App Development / Full-time role'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className='text-xs text-rose-400' />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='message'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-xs font-semibold uppercase tracking-wider text-zinc-300'>
                    Message
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder='Tell me about your goals, timeline, and any specific technical requirements...'
                      rows={5}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className='text-xs text-rose-400' />
                </FormItem>
              )}
            />

            <div className='pt-2 flex flex-col sm:flex-row items-center justify-between gap-4'>
              <span className='text-[11px] text-zinc-500'>
                🔒 Your privacy is respected. No spam guaranteed.
              </span>
              <SubmitButton className='w-full sm:w-auto'>
                Dispatch Message
              </SubmitButton>
            </div>
          </form>
          <Toaster />
        </FormProvider>
      </div>
    </FadeIn>
  );
}
