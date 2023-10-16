'use client';
import { Schedule } from '@/app/type';
import { postData } from '@/utils';
import { useRouter } from 'next/navigation';
import { useFieldArray, useForm } from 'react-hook-form';

interface FormProps {
  category: string;
}

export default function ScheduleForm({ category }: FormProps) {
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<Schedule>();
  const { fields, append, remove } = useFieldArray({
    name: 'scheduleList',
    control,
  });
  const onSubmit = async (data: Schedule) => {
    console.log(data);
    await postData(category, data);
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
                <input
                  placeholder="time"
                  {...register(`scheduleList.${index}.time` as const, {
                    required: true,
                  })}
                  className="border"
                />
                <input
                  placeholder="place"
                  {...register(`scheduleList.${index}.place` as const, {
                    required: true,
                  })}
                  className="border"
                />

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
