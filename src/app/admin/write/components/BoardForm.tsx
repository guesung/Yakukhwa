'use client';
import { Posting } from '@/app/type';
import Input from '@/components/Input';
import Spacing from '@/components/Spacing';
import { postData } from '@/utils/firebaseController';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

interface FormProps {
  category: string;
  postingItem: Posting;
}

export default function BoardForm({ category, postingItem }: FormProps) {
  const { register, handleSubmit } = useForm<Posting>({
    defaultValues: postingItem,
  });
  const router = useRouter();
  console.log(postingItem);

  const onSubmit = (data: Posting) => {
    postData(category, data);
    router.refresh();
    router.back();
  };

  return (
    <form className="px-50" onSubmit={handleSubmit(onSubmit)}>
      <Spacing size={30} />
      <div className="text-title1">
        제목 : <Input required register={register('title')} />
      </div>
      <p className="text-subtitle2">
        작성 날짜 : <Input register={register('date')} required />
      </p>
      <div className="whitespace-pre-wrap py-30 text-subtitle1">
        내용 <textarea {...register('content')} className="h-600 w-full border" required />
      </div>
      <button className="h-50 w-100 border bg-slate-400">제출</button>
    </form>
  );
}
