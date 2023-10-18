import { cn } from '@/utils';
import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, PropsWithChildren {
  className?: string;
}
export default function Button({ className, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'rounded border border-blue-500 bg-transparent px-4 py-2 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
