"use client";

import Document from "@/components/ui/Document";
import { useEffect, useState } from "react";

export default function DocumentPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [id, setId] = useState<string | null>(null);
  useEffect(() => {
    getId();
  }, []);

  async function getId() {
    // Await the params promise to get the id
    const { id } = await params;
    setId(id);
  }

  return (
    <div className="flex flex-col flex-1 min-h-screen">
      {id && <Document id={id} />}
    </div>
  ); // To ensure the whole screen size is used
}
