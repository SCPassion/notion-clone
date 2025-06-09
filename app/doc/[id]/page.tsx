"use client";

import { useEffect, useState, useTransition } from "react";

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

  return <h1>document</h1>;
}
