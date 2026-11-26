"use client";

import { LoginForm } from "./components/login-form";
import { LoginHeader } from "./components/login-header";

export default function LoginPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto">
        <LoginHeader />
        <LoginForm />
      </div>
    </div>
  );
}