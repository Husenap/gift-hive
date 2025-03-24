import Providers from "@/components/providers/providers";
import { ConvexAuthNextjsServerProvider } from "@convex-dev/auth/nextjs/server";
import { cn } from "@heroui/react";
import type { Metadata, Viewport } from "next";
import { ViewTransitions } from "next-view-transitions";
import { Geist } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
});

const defaultUrl = process.env.VERCEL
  ? "https://gifthive.husseintaher.com"
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "🎁 GiftHive – Secret Gift Ideas from Friends & Family",
  description:
    "GiftHive is the fun and heartwarming way to collaborate on birthday gift ideas—without ruining the surprise! Create a group, brainstorm secret gift ideas for each other, and keep the magic alive. Everyone can see the ideas—except the recipient! Perfect for friends, family, and loved ones. 🐝🎉",
};

export const viewport: Viewport = {
  viewportFit: "cover",
  minimumScale: 1.0,
  maximumScale: 1.0,
  userScalable: false,
  themeColor: "#d7bf9e",
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ViewTransitions>
      <ConvexAuthNextjsServerProvider>
        <html
          lang="en"
          suppressHydrationWarning
          className={cn(
            geistSans.className,
            "h-full min-h-full overflow-x-hidden overscroll-x-none",
          )}
        >
          <body className="bg-background text-foreground relative h-full min-h-full w-full overflow-x-hidden overscroll-x-none">
            <Providers>{children}</Providers>
          </body>
        </html>
      </ConvexAuthNextjsServerProvider>
    </ViewTransitions>
  );
}
