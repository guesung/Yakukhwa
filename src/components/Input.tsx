import { cn } from '@/utils';
import { UseFormRegister, UseFormRegisterReturn } from 'react-hook-form';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegisterReturn<any>;
  className?: string;
}
export default function Input({ register, className, ...props }: InputProps) {
  return <input {...register} className={cn('border', className)} {...props} />;
}
