"use client";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";

export default function Form() {
  const { register, handleSubmit } = useForm();

  return (
    <div>
      <textarea />
      <Button>제출</Button>
    </div>
  );
}
