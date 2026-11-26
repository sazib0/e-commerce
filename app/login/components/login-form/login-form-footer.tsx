"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

interface LoginFormFooterProps {
  isLoading: boolean;
}

export function LoginFormFooter({ isLoading }: LoginFormFooterProps) {
  return (
    <div className="space-y-4">
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? "Logging in..." : "Login"}
      </Button>
      
      <p className="text-center text-sm text-muted-foreground">
        Don't have an account?{" "}
        <Link href="/registration" className="text-primary hover:underline">
          Register
        </Link>
      </p>
    </div>
  );
}