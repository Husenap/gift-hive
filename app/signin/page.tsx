"use client";

import { useAuthActions } from "@convex-dev/auth/react";
import { Avatar, Button, Card, CardBody, CardFooter, CardHeader, Image, Input } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignIn() {
  const { signIn } = useAuthActions();
  const [flow, setFlow] = useState<"signIn" | "signUp">("signIn");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  return (
    <div className="w-full h-screen">
      <Image
        src="/hero.webp"
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover z-0"
        removeWrapper
      />

      <div className="absolute inset-0 bg-background/30 z-0"></div>

      <div className="absolute inset-0 flex justify-center items-center p-2 z-50">
        <Card>
          <CardHeader>
            <div className="flex flex-col gap-2 items-center justify-center w-full">
              <Avatar src="/icon4.png" size="lg"></Avatar>
              <h1 className="text-2xl font-bold">
                {flow === "signIn" ? "Welcome Back!" : "Welcome to the Hive!"}
              </h1>
            </div>
          </CardHeader>
          <CardBody>
            <form
              className="flex flex-col gap-2"
              onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.target as HTMLFormElement);
                formData.set("flow", flow);
                try {
                  await signIn("gift-hive", formData);
                  router.push("/");
                } catch (error) {
                  if (error instanceof Error) {
                    setError(error.message);
                  }
                }
              }}
            >
              <Input
                type="text"
                name="username"
                label="Username"
                isRequired
              />
              <Input
                type="password"
                name="password"
                label="Password"
                isRequired
              />
              <input name="flow" type="hidden" value={flow} />
              {flow === "signUp" && (
                <>
                  <div className="flex flex-row gap-2">
                    <Input
                      type="text"
                      name="firstname"
                      label="First Name"
                      isRequired
                    />
                    <Input
                      type="text"
                      name="lastname"
                      label="Last Name"
                      isRequired
                    />
                  </div>
                  <Input
                    type="date"
                    name="birthdate"
                    label="Birth Date"
                    isRequired
                  />
                </>
              )}
              <Button
                color="primary"
                type="submit"
              >
                {flow === "signIn" ? "Sign in" : "Sign up"}
              </Button>

              {error && (
                <div className="bg-red-500/20 border-2 border-red-500/50 rounded-md p-2">
                  <p className="text-foreground font-mono text-xs">
                    Error signing in: {error}
                  </p>
                </div>
              )}
            </form>
            <CardFooter>
              <div className="flex flex-row gap-2">
                <span>
                  {flow === "signIn"
                    ? "Don't have an account?"
                    : "Already have an account?"}
                </span>
                <span
                  className="text-foreground underline hover:no-underline cursor-pointer"
                  onClick={() => setFlow(flow === "signIn" ? "signUp" : "signIn")}
                >
                  {flow === "signIn" ? "Sign up instead" : "Sign in instead"}
                </span>
              </div>
            </CardFooter>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
