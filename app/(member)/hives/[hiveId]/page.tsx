"use client";

import Navbar from "@/app/(member)/hives/[hiveId]/navbar";
import FullscreenSpinner from "@/components/fullscreen-spinner";
import PageContainer from "@/components/page-container";
import { TypographyH1, TypographyH2 } from "@/components/typography";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import { use } from "react";

export default function Page({
  params,
}: {
  params: Promise<{ hiveId: Id<"hives"> }>;
}) {
  const { hiveId } = use(params);

  return (
    <PageContainer topNavbar={<Navbar />}>
      <Content hiveId={hiveId} />
    </PageContainer>
  );
}

function Content({ hiveId }: { hiveId: Id<"hives"> }) {
  const hive = useQuery(api.hives.byId, { id: hiveId });

  if (!hive) return <FullscreenSpinner />;

  return (
    <>
      <TypographyH1>{hive.name}</TypographyH1>
      <TypographyH2>{hive.description}</TypographyH2>
    </>
  );
}
