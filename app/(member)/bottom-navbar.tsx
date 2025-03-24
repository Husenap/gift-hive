"use client";

import { Button } from "@heroui/react";
import { Hexagon, User } from "lucide-react";
import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";

export default function BottomNavbar() {
  const pathname = usePathname();

  const tabs = [
    {
      href: "/hives",
      title: "Hives",
      icon: <Hexagon />,
    },
    {
      href: "/profile",
      title: "Profile",
      icon: <User />,
    },
  ];

  return (
    <>
      <div className="flex w-full flex-row items-center justify-around">
        {tabs.map((tab) => (
          <div
            key={tab.href}
            className="flex flex-1 items-center justify-center gap-2 p-2"
          >
            <Button
              color="primary"
              startContent={tab.icon}
              variant={pathname.startsWith(tab.href) ? "shadow" : "light"}
              as={Link}
              href={tab.href}
              prefetch
            >
              {tab.title}
            </Button>
          </div>
        ))}
      </div>
    </>
  );
}
