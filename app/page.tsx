"use client";

import { useAuthActions } from "@convex-dev/auth/react";
import { Button } from "@heroui/react";
import { useConvexAuth } from "convex/react";
import { useRouter } from "next/navigation";

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-10 bg-background p-4 border-b-2 border-slate-200 dark:border-slate-800 flex flex-row justify-between items-center">
        Convex + Next.js + Convex Auth
        <SignOutButton />
      </header>
      <main className="p-8 flex flex-col gap-8">
        <h1 className="text-4xl font-bold text-center">
          Convex + Next.js + Convex Auth
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
    <div className="flex flex-col gap-8 max-w-lg mx-auto">
      <Button color="primary">Click Me!</Button>
    </div>
  );
}
