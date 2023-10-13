"use client";

import { setCookie } from "@/utils/cookieController";
import { useForm } from "react-hook-form";

type Inputs = {
  password: string;
};

export default function Login() {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit = (data: Inputs) => {
    setCookie("password", data.password);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input className="border" {...register("password")} />
      <button type="submit">로그인</button>
    </form>
  );
}
