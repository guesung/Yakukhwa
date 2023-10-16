'use client';
import Input from '@/components/Input';
import { postData, uploadImage } from '@/utils';
import { useRouter } from 'next/navigation';
import { useFieldArray, useForm } from 'react-hook-form';

interface FormProps {
  category: string;
}

interface FormValues {
  date: string;
  scheduleList: Array<{
    time: string;
    place: string;
    image: FileList;
  }>;
}

export default function ScheduleForm({ category }: FormProps) {
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<FormValues>();
  const { fields, append, remove } = useFieldArray({
    name: 'scheduleList',
    control,
  });
  const onSubmit = async (data: FormValues) => {
    const imageUrlList = await Promise.all(
      data.scheduleList.map(async (schedule) => {
        if (!schedule.image) return;
        return await uploadImage(schedule.time, schedule.image[0]);
      })
    );
    await postData(category, {
      ...data,
      scheduleList: data.scheduleList.map((schedule, index) => ({
        ...schedule,
        imageUrl: imageUrlList[index],
        image: '',
      })),
    });
    router.refresh();
    router.back();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('date')} className="border" />
        {fields.map((field, index) => {
          return (
            <div key={field.id}>
              <section key={field.id}>
                시간 :
                <Input
                  placeholder="time"
                  register={register(`scheduleList.${index}.time` as const, {
                    required: true,
                  })}
                />
                장소 :
                <Input
                  placeholder="place"
                  register={register(`scheduleList.${index}.place` as const, {
                    required: true,
                  })}
                />
                이미지 :
                <Input register={register(`scheduleList.${index}.image` as const)} type="file" />
                <button type="button" onClick={() => remove(index)}>
                  제거
                </button>
              </section>
            </div>
          );
        })}

        <button
          type="button"
          className="block"
          onClick={() =>
            append({
              time: '',
              place: '',
              image: FileList as any,
            })
          }
        >
          추가
        </button>
        <input type="submit" />
      </form>
    </div>
  );
}
