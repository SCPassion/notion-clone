"use client";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { useTransition } from "react";
import { createNewDocument } from "@/actions/action";
export default function NewDocumentButton() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  function handleCreateNewDocument() {
    // When you have something async, wrapping it with useTransition hooks
    startTransition(async () => {
      // Whatever happening here, when happening, isPending will be true
      const { docId } = await createNewDocument();
      router.push(`/doc/${docId}`);
    });
  }

  return (
    <Button
      onClick={handleCreateNewDocument}
      disabled={isPending}
      className="border"
    >
      {isPending ? "Creating" : "New Document"}
    </Button>
  );
}
