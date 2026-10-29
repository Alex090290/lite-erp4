"use client";
import FormLayout from "@/components/form/FormLayout";
import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  name: string;
  phone: string;
};

function PageLogin() {
  const methods = useForm<FormValues>();
  const {
    register,
    formState: { errors },
  } = methods;

  const handleSubmit: SubmitHandler<FormValues> = (data) => {};

  return (
    <FormLayout onSubmit={handleSubmit} methods={methods}>
      <div className="flex flex-col gap-2 p-2 border w-1/2 items-center">
        <input type="text" {...register("name", { required: "El campo nombre es requerido" })} className="input" />
        <input type="text" {...register("phone", { required: "El campo teléfono es requerido" })} className="input" />
        <button type="submit" className="btn btn-primary">
          Submitear
        </button>
      </div>
      <div>{errors && <span>{errors.root?.message}</span>}</div>
    </FormLayout>
  );
}

export default PageLogin;
