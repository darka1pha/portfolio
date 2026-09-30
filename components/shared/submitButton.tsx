'use client';

import { Loader2, Send } from 'lucide-react';
import { ButtonHTMLAttributes } from 'react';
import { useFormStatus } from 'react-dom';
import { Button } from '../ui/button';

interface SubmitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loadingText?: string;
}

const SubmitButton = ({
  loadingText = 'Sending Message...',
  children,
  className = '',
  ...props
}: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <Button
      disabled={pending}
      aria-disabled={pending}
      type='submit'
      className={`inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-black font-bold px-8 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-teal-500/25 active:scale-95 disabled:opacity-50 disabled:pointer-events-none ${className}`}
      {...props}
    >
      {pending ? (
        <>
          <Loader2 className='w-4 h-4 animate-spin' />
          <span>{loadingText}</span>
        </>
      ) : (
        <>
          <span>{children}</span>
          <Send size={15} />
        </>
      )}
    </Button>
  );
};

export default SubmitButton;
