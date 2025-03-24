"use client";

import ConvexClientProvider from "@/components/providers/convex-client-provider";
import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <ConvexClientProvider>
        <HeroUIProvider className="h-full w-full">
          <NextThemesProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
          >
            {children}
          </NextThemesProvider>
        </HeroUIProvider>
      </ConvexClientProvider>
    </>
  );
}
