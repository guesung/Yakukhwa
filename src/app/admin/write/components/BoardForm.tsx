'use client';
import Spacing from '@/components/Spacing';
import { postData } from '@/utils/firebaseController';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

interface FormProps {
  category: string;
}

export default function BoardForm({ category }: FormProps) {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const onSubmit = (data: any) => {
    postData(category, data);
    router.refresh();
    router.back();
  };

  return (
    <form className="px-50" onSubmit={handleSubmit(onSubmit)}>
      <Spacing size={30} />
      <div className="text-title1">
        제목 : <input {...register('title')} className="border" required />
      </div>
      <p className="text-subtitle2">
        ID : <input {...register('id')} className="border" />
      </p>
      <p className="text-subtitle2">
        작성 날짜 : <input {...register('date')} className="border" required />
      </p>
      <div className="whitespace-pre-wrap py-30 text-subtitle1">
        내용 <textarea {...register('content')} className="w-full border" required />
      </div>
      <button className="h-50 w-100 border">제출</button>
    </form>
  );
}
