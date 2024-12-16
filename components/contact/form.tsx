'use client';
import { z } from 'zod';
import {
  Form as FormProvider,
  FormField,
  FormItem,
  FormLabel,
  FormDescription,
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

const formSchema = z.object({
  name: z
    .string({ required_error: 'name is required' })
    .min(2, { message: 'name should be at least 2 charachters' })
    .max(50, { message: "name couldn't be more than 50 charachter" }),
  email: z
    .string({ required_error: 'email is required' })
    .email({ message: 'invalid email address' }),
  subject: z
    .string({ required_error: 'subject is required' })
    .min(2, { message: 'subject should be at least 2 charachters' })
    .max(50, { message: "subject couldn't be more than 50 charachter" }),
  message: z.string({ required_error: 'message is required' }).min(5, {
    message: 'message should be at least 5 charachters',
  }),
});

const Form = () => {
  const toast = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    mode: 'all',
  });

  const formActions = async (formData: FormData) => {
    const isComplete = await form.trigger();

    if (isComplete) {
      const res = await sendEmail(formData);
      if (res.data?.id) {
        toast.toast({
          title: 'Success',
          description: 'Email sent successfully',
        });
      } else {
        toast.toast({
          title: 'Error',
          description: 'Something went wrong',
          variant: 'destructive',
        });
      }
    }
  };

  return (
    <FormProvider {...form}>
      <form
        className='grid grid-cols-2 gap-5'
        action={formActions}
      >
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  placeholder='name'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder='email'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='subject'
          render={({ field }) => (
            <FormItem className='col-span-2'>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input
                  placeholder='subject'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='message'
          render={({ field }) => (
            <FormItem className='col-span-2'>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder='message'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='col-span-2 flex flex-row justify-end'>
          <SubmitButton>Submit</SubmitButton>
        </div>
      </form>
      <Toaster />
    </FormProvider>
  );
};

export default Form;
