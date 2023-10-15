'use client';
import { GalleryType } from '@/app/type';
import Spacing from '@/components/Spacing';
import { postData, uploadImage } from '@/utils';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

interface FormProps {
  category: string;
}

interface InputType extends Omit<GalleryType, 'imageUrl'> {
  image: FileList;
}

export default function CardForm({ category }: FormProps) {
  const { register, handleSubmit } = useForm<InputType>();
  const router = useRouter();

  const onSubmit = async ({ image, title, ...props }: InputType) => {
    const imageUrl = await uploadImage(title, image[0]);
    await postData(category, { imageUrl, title, ...props });
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
      <div>
        사진 <input {...register('image')} className="border" type="file" />
      </div>
      <button className="h-50 w-100 border">제출</button>
    </form>
  );
}
