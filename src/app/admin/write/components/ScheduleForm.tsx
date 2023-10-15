'use client';
import Spacing from '@/components/Spacing';
import { postData } from '@/utils/firebaseController';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

interface FormProps {
  category: string;
}

export default function ScheduleForm({ category }: FormProps) {
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
      <div className="text-subtitle2">
        날짜 : <input {...register('date')} className="border" required />
      </div>
      <p className="text-subtitle2">
        시간 : <input {...register('time')} className="border" />
      </p>
      <p className="text-subtitle2">
        장소 : <input {...register('place')} className="border" required />
      </p>
      <button className="h-50 w-100 border">제출</button>
    </form>
  );
}
