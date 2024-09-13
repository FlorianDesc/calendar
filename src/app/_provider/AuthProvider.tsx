"use client";

import { SessionProvider } from "next-auth/react";
import { PropsWithChildren } from "react";

type AuthProvider = PropsWithChildren;

export default function AuthProvider({ children }: AuthProvider) {
  return <SessionProvider>{children}</SessionProvider>;
}
