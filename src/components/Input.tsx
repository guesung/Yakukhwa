import { cn } from '@/utils';
import { UseFormRegisterReturn } from 'react-hook-form';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegisterReturn<any>;
  className?: string;
}
export default function Input({ register, className, ...props }: InputProps) {
  return (
    <input {...register} className={cn('m-5 rounded-lg border px-10', className)} {...props} />
  );
}
