"use client";

import { SingInView } from "@/modules/auth/ui/views/sing-in-view";
import { AuthLayout } from "@/modules/auth/ui/layouts/auth-layout";
import { Authenticated, AuthLoading, Unauthenticated } from "convex/react";

export const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AuthLoading>
        <AuthLayout>
          <p>Loading...</p>
        </AuthLayout>
      </AuthLoading>
      <Authenticated>
        <AuthLayout>{children}</AuthLayout>
      </Authenticated>
      <Unauthenticated>
        <AuthLayout>
          <SingInView />
        </AuthLayout>
      </Unauthenticated>
    </>
  );
};
