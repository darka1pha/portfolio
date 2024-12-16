'use client';
import { Loader2 } from 'lucide-react';
import { ButtonHTMLAttributes } from 'react';
import { useFormStatus } from 'react-dom';
import { Button } from '../ui/button';

const SubmitButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { pending } = useFormStatus();

  return (
    <Button
      disabled={pending}
      aria-disabled={pending}
      type='submit'
      className='bg-teal-800 hover:bg-teal-600'
      {...props}
    >
      {pending ? <Loader2 className='animate-spin' /> : props.children}
    </Button>
  );
};

export default SubmitButton;
