'use client';
import Spacing from '@/components/Spacing';
import { postData } from '@/utils/firebaseController';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

interface FormProps {
  category: string;
}

export default function CardForm({ category }: FormProps) {
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
        제목 : <input {...register('title')} className="border" />
      </div>
      <p className="text-subtitle2">
        ID : <input {...register('id')} className="border" />
      </p>
      <p className="text-subtitle2">
        일시 : <input {...register('date')} className="border" />
      </p>
      <div className="whitespace-pre-wrap py-30 text-subtitle1">
        내용 <textarea {...register('content')} className="w-full border" />
      </div>
      <div className="text-title1">
        사진 : <input {...register('image')} className="border" />
      </div>
      <button className="h-50 w-100 border">제출</button>
    </form>
  );
}
