"use client";

import { useLoginForm } from "../../hooks/use-login-form";
import { LoginFormFields } from "./login-form-fields";
import { LoginFormFooter } from "./login-form-footer";

export function LoginForm() {
  const { formData, handleChange, handleSubmit, isLoading } = useLoginForm();

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <LoginFormFields 
        formData={formData} 
        handleChange={handleChange} 
      />
      <LoginFormFooter isLoading={isLoading} />
    </form>
  );
}