"use client";

import { RegistrationForm } from "./components/registration-form";
import { RegistrationHeader } from "./components/registration-header";

export default function RegistrationPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto">
        <RegistrationHeader />
        <RegistrationForm />
      </div>
    </div>
  );
}