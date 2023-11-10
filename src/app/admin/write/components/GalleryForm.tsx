'use client';
import { GalleryType } from '@/app/type';
import Input from '@/components/Input';
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
    <form className="px-50 py-100" onSubmit={handleSubmit(onSubmit)}>
      <Spacing size={30} />
      <div className="text-title1">
        제목 : <Input register={register('title')} required />
      </div>
      <div>
        사진 <Input register={register('image')} type="file" />
      </div>
      <button className="h-50 w-100 border">제출</button>
    </form>
  );
}
