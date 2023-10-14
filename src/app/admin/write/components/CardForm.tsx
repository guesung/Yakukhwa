'use client';
import Spacing from '@/components/Spacing';
import { postData, uploadImage } from '@/utils';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

interface FormProps {
  category: string;
}

interface InputType {
  title: string;
  id: string;
  date: string;
  content: string;
  image: FileList;
}

export default function CardForm({ category }: FormProps) {
  const { register, handleSubmit } = useForm<InputType>();
  const router = useRouter();

  const onSubmit = async ({ title, id, date, content, image }: InputType) => {
    const imageUrl = await uploadImage(title, image[0]);
    await postData(category, { imageUrl, title, id, date, content });
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
        일시 : <input {...register('date')} className="border" required />
      </p>
      <div className="whitespace-pre-wrap py-30 text-subtitle1">
        내용 <textarea {...register('content')} className="w-full border" required />
      </div>
      <div className="text-title1">
        사진 : <input {...register('image')} className="border" type="file" />
      </div>
      <button className="h-50 w-100 border">제출</button>
    </form>
  );
}
