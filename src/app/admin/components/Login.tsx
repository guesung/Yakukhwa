'use client';

import Button from '@/components/Button';
import Input from '@/components/Input';
import { config } from '@/config';
import { setClientCookie } from '@/utils/cookieController';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

type Inputs = {
  password: string;
};

export default function Login() {
  const { register, handleSubmit } = useForm<Inputs>();
  const router = useRouter();
  const onSubmit = (data: Inputs) => {
    const { password } = data;
    if (password === '') alert('비밀번호를 입력해주세요.');
    if (password === config.adminPassword) alert('로그인 성공');
    else return alert('비밀번호가 틀렸습니다.');
    setClientCookie('password', data.password);
    router.push('/');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input className="border" register={register('password')} />
      <Button type="submit">로그인</Button>
    </form>
  );
}
