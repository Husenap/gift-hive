"use client";

import { ThemeSwitcher } from "@/components/theme-switcher";
import { useAuthActions } from "@convex-dev/auth/react";
import { Button, Navbar as HeroUINavbar, Image, Link, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/react";
import { useConvexAuth } from "convex/react";
import { useRouter } from "next/navigation";

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


export default function Navbar() {
  return (<>
    <HeroUINavbar>
      <NavbarBrand>
        <Image src="/favicon.ico" alt="GiftHive" className="w-8 h-8" />
        <p className="font-bold text-inherit">GiftHive</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link aria-current="page" href="#">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarItem>
          <SignOutButton />
        </NavbarItem>
      </NavbarContent>
    </HeroUINavbar>
  </>);
}