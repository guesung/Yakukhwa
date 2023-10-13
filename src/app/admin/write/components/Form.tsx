"use client";
import Spacing from "@/components/Spacing";
import { postData } from "@/utils/firebaseController";
import { useForm } from "react-hook-form";

interface FormProps {
  category: string;
}

export default function Form({ category }: FormProps) {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    postData(category, data.id, data);
  };

  return (
    <form className="px-50" onSubmit={handleSubmit(onSubmit)}>
      <Spacing size={30} />
      <div className="text-title1">
        제목 : <input {...register("title")} className="border" />
      </div>
      <p className="py-30 text-subtitle2">
        ID :<input {...register("id")} className="border" />
      </p>
      <p className="text-subtitle2">
        작성 날짜 : <input {...register("date")} className="border" />
      </p>
      <div className="py-30 whitespace-pre-wrap text-subtitle1">
        내용 <textarea {...register("content")} className="border w-full" />
      </div>
      <button className="w-100 h-50 border">제출</button>
    </form>
  );
}
