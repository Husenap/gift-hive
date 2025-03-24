"use client";

import BottomNavbar from "@/app/(member)/bottom-navbar";
import Navbar from "@/app/(member)/hives/navbar";
import PageContainer from "@/components/page-container";
import { TypographyH2 } from "@/components/typography";
import { api } from "@/convex/_generated/api";
import { Button } from "@heroui/react";
import { useQuery } from "convex/react";
import { useTransitionRouter } from "next-view-transitions";

export default function Page() {
  return (
    <PageContainer topNavbar={<Navbar />} bottomNavbar={<BottomNavbar />}>
      <TypographyH2>Hives</TypographyH2>
      <Content />
    </PageContainer>
  );
}

function Content() {
  const { push } = useTransitionRouter();
  const hives = useQuery(api.hives.myHives);

  if (!hives) return null;

  return (
    <>
      {hives.length === 0 ? (
        <div>{"You're not a member of any Hives yet."}</div>
      ) : (
        hives.map((hive) => (
          <Button
            key={hive._id}
            onPress={() => push(`/hives/${hive._id}`)}
            color="secondary"
          >
            {hive.name}
          </Button>
        ))
      )}
    </>
  );
}
