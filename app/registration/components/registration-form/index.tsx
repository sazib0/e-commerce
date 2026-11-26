"use client";

import { useRegistrationForm } from "../../hooks/use-registration-form";
import { RegistrationFormFields } from "./registration-form-fields";
import { RegistrationFormFooter } from "./registration-form-footer";

export function RegistrationForm() {
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