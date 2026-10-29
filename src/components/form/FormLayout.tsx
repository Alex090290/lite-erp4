"use client";

import { ReactNode } from "react";
import { FieldValues, FormProvider, UseFormReturn } from "react-hook-form";

interface FormProps<T extends FieldValues> {
  methods: UseFormReturn<T>;
  onSubmit: (data: T) => void;
  children: ReactNode;
  className?: string;
}

export default function FormLayout<T extends FieldValues>({ methods, onSubmit, children, className = "" }: FormProps<T>) {
  return (
    <FormProvider {...methods}>
      <form noValidate className={`${className}`} onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
}
