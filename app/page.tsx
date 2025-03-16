"use client";

import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { useAuthActions } from "@convex-dev/auth/react";
import { Avatar, Button } from "@heroui/react";
import { useConvexAuth } from "convex/react";
import { useRouter } from "next/navigation";

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-10 bg-background p-4 border-b-2 border-default-100 flex flex-row justify-between items-center">
        <div className="flex flex-row gap-4 items-center">

          <Avatar src="/favicon.ico"></Avatar>
          <span>
            GiftHive
          </span>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <ThemeSwitcher />
          <SignOutButton />
        </div>
      </header>
      <main className="p-8 flex flex-col gap-8">
        <h1 className="text-4xl font-bold text-center">
          Welcome to GiftHive!
        </h1>
        <Content />
      </main>
    </>
  );
}

function SignOutButton() {
  const { isAuthenticated } = useConvexAuth();
  const { signOut } = useAuthActions();
  const router = useRouter();
  return (
    <>
      {isAuthenticated && (
        <Button
          color="danger"
          onPress={async () => {
            await signOut();
            router.push("/signin");
          }}
        >
          Sign out
        </Button>
      )}
    </>
  );
}

function Content() {
  return (
    <>
      <div className="flex flex-row gap-8 justify-center">
        <Button color="default">Default</Button>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="success">Success</Button>
        <Button color="warning">Warning</Button>
        <Button color="danger">Danger</Button>
      </div>
    </>
  );
}
