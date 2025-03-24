"use client";

import Navbar from "@/app/(member)/hives/new/navbar";
import PageContainer from "@/components/page-container";
import { TypographyH1 } from "@/components/typography";
import { api } from "@/convex/_generated/api";
import { Button, Input, Textarea } from "@heroui/react";
import { useMutation } from "convex/react";
import { useTransitionRouter } from "next-view-transitions";
import { useCallback, useState } from "react";

export default function Page() {
  const { push } = useTransitionRouter();
  const createHive = useMutation(api.hives.createHive);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const onCreate = useCallback(async () => {
    const hiveId = await createHive({ name: title, description: description });
    push(`/hives/${hiveId}`);
  }, [createHive, title, description]);

  return (
    <PageContainer topNavbar={<Navbar />}>
      <TypographyH1>Create a new Hive</TypographyH1>
      <Input
        label="Title"
        name="title"
        value={title}
        onValueChange={setTitle}
        isRequired
      />
      <Textarea
        label="Description"
        name="description"
        value={description}
        onValueChange={setDescription}
      />
      <Button color="primary" onPress={onCreate}>
        Create Hive
      </Button>
    </PageContainer>
  );
}
