"use client";

import ConvexClientProvider from "@/components/ConvexClientProvider";
import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  return (<>
    <ConvexClientProvider>
      <HeroUIProvider>
        <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </NextThemesProvider>
      </HeroUIProvider>
    </ConvexClientProvider>

  </>);
}