'use client';

import { setClientCookie } from '@/utils/cookieController';
import { useForm } from 'react-hook-form';

type Inputs = {
  password: string;
};

export default function Login() {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit = (data: Inputs) => {
    setClientCookie('password', data.password);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input className="border" {...register('password')} />
      <button type="submit">로그인</button>
    </form>
  );
}
