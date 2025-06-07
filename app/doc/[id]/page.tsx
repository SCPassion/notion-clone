"use client";

import { useEffect, useState, useTransition } from "react";

export default function DocumentPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [id_t, setId] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  startTransition(async () => {
    const { id } = await params;

    setId(id);
  });

  return <h1>document</h1>;
}
