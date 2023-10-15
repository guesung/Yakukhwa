'use client';

import { postData, uploadImage } from '@/utils';
import { useForm } from 'react-hook-form';

interface Inputs {
  title: string;
  image: FileList;
}
export default function Form() {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmitMainImage = async ({ title, image }: Inputs) => {
    const imageUrl = await uploadImage(title, image[0]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitMainImage)}>
        제목 : <input {...register('title')} className="border" type="text" />
        메인 이미지 등록 : <input {...register('image')} className="border" type="file" />
        <button>제출</button>
      </form>
    </div>
  );
}
