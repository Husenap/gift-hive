"use client";

import BottomNavbar from "@/app/(member)/bottom-navbar";
import PageContainer from "@/components/page-container";

export default function Home() {
  return (
    <PageContainer bottomNavbar={<BottomNavbar />}>
      <main className="flex flex-col gap-8 p-8">
        <h1 className="text-center text-4xl font-bold">Welcome to GiftHive!</h1>
      </main>
    </PageContainer>
  );
}
