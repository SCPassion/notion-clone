"use client";
import { useEffect, useState, useTransition } from "react";
import { Input } from "./input";
import { Button } from "./button";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { useDocumentData } from "react-firebase-hooks/firestore";

export default function Document({ id }: { id: string }) {
  const [data, loading, eror] = useDocumentData(doc(db, "documents", id));
  const [input, setInput] = useState<string>("");
  const [isUpdating, startTransition] = useTransition();

  useEffect(() => {
    if (data) {
      setInput(data.title);
    }
  }, [data]);
  function updateTitle(formData: FormData) {
    if (input.trim()) {
      startTransition(async () => {
        await updateDoc(doc(db, "documents", id), {
          title: input,
        });
      });
    }
  }

  return (
    <div>
      <div className="flex max-w-6xl mx-auto justify-between pb-5">
        <form action={updateTitle} className="flex flex-1 space-x-2">
          {/* update title */}
          <Input value={input} onChange={(e) => setInput(e.target.value)} />
          <Button disabled={isUpdating}>
            {isUpdating ? "Updating" : "Update"}
          </Button>

          {/* If is owner & invitedUser,  delete document*/}
        </form>
      </div>
      <div>
        {/* ManageUsers */}

        {/* Avatars */}
      </div>

      {/* Collaborative Editor */}
    </div>
  );
}
