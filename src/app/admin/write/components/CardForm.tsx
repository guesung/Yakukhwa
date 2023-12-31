'use client';
import { CardType } from '@/app/type';
import Input from '@/components/Input';
import Spacing from '@/components/Spacing';
import { postData, uploadImage } from '@/utils';
import { clear } from 'console';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

interface FormProps {
  category: string;
  postingItem: CardType;
}

interface InputType extends CardType {
  image: FileList;
}

export default function CardForm({ category, postingItem }: FormProps) {
  const { register, handleSubmit } = useForm<InputType>({
    defaultValues: postingItem,
  });
  const router = useRouter();

  const onSubmit = async ({ image, title, ...props }: InputType) => {
    if (image.length === 0 && postingItem?.imageUrl) {
      await postData(category, { title, ...props });
      router.back();
    }

    if (image.length === 0) {
      await postData(category, { title, ...props });
    }

    const imageUrl = await uploadImage(title, image[0]);
    await postData(category, { imageUrl, title, ...props });
    router.back();
  };

  return (
    <form className="px-50" onSubmit={handleSubmit(onSubmit)}>
      <Spacing size={30} />
      <div className="text-title1">
        *제목 : <Input register={register('title')} required />
      </div>
      <p className="text-subtitle2">
        *일시 : <Input register={register('date')} required />
      </p>
      <p className="text-subtitle2">
        *장소 : <Input register={register('place')} required />
      </p>
      <p className="text-subtitle2">
        구글폼 URL(https를 포함하여 풀 url을 작성해주세요.) :
        <Input register={register('googleFormUrl')} />
      </p>
      <div className="whitespace-pre-wrap py-30 text-subtitle1">
        *내용 <textarea {...register('content')} className="h-100 w-full border" required />
      </div>
      <div>
        사진 <Input register={register('image')} type="file" />
      </div>
      <button className="h-50 w-100 border">제출</button>
    </form>
  );
}
