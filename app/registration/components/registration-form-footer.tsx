"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

interface RegistrationFormFooterProps {
  isLoading: boolean;
}

export function RegistrationFormFooter({ isLoading }: RegistrationFormFooterProps) {
  return (
    <div className="space-y-4">
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? "Creating Account..." : "Create Account"}
      </Button>
      
      <p className="text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link href="/login" className="text-primary hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
}