"use client";
import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { AuthProvider } from "./authfirebase/AuthContext";
import NavBarSelector from "./uilib/NavBarSelector";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

  return(
    <NextUIProvider navigate={router.push}>
      <AuthProvider>
        {/* Removable */}
        <NavBarSelector />
        {/* Removable */}
        <NextUIProvider navigate={router.push}>
          <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
        </NextUIProvider>
      </AuthProvider>
    </NextUIProvider>
  );
}

 