"use client";

import { ThemeProvider } from "next-themes";
import { PropsWithChildren } from "react";

export default function ColorThemeProvider({ children }: PropsWithChildren) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      {children}
    </ThemeProvider>
  );
}
