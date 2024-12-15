import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'rounded-full transition-colors',
          {
            'bg-teal-500 text-white hover:bg-teal-600': variant === 'primary',
            'bg-gray-900 text-white hover:bg-gray-800': variant === 'secondary',
            'border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white':
              variant === 'outline',
            'px-6 py-2': size === 'sm',
            'px-8 py-3': size === 'md',
            'px-8 py-4': size === 'lg',
          },
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export default Button;
