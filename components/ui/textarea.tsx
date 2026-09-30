import * as React from 'react';
import { cn } from '@/lib/utils';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'flex min-h-[120px] w-full rounded-xl border border-white/10 bg-zinc-900/60 p-4 text-sm text-white placeholder:text-zinc-500 transition-all duration-200 focus-visible:outline-none focus-visible:border-teal-400 focus-visible:ring-1 focus-visible:ring-teal-400/30 disabled:cursor-not-allowed disabled:opacity-50 caret-teal-400',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = 'Textarea';

export { Textarea };
