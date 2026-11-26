"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRegistrationForm } from "../hooks/use-registration-form";
import { RegistrationFormFields } from "./registration-form-fields";
import { RegistrationFormFooter } from "./registration-form-footer";

export function RegistrationForm() {
  const router = useRouter();
  const { formData, handleChange, handleSubmit, isLoading } = useRegistrationForm();

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <RegistrationFormFields 
        formData={formData} 
        handleChange={handleChange} 
      />
      <RegistrationFormFooter isLoading={isLoading} />
    </form>
  );
}