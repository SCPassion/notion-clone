"use client";
import { LiveblocksProvider } from "@liveblocks/react/suspense";
export function LiveBlocksProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  if (
    !process.env.NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY ||
    !process.env.LIVEBLOCKS_PRIVATE_KEY
  ) {
    throw new Error(
      "Liveblocks keys are not set. Please ensure that NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY and LIVEBLOCKS_PRIVATE_KEY are defined in your environment variables."
    );
  }

  return (
    <LiveblocksProvider authEndpoint="/auth-endpoint" throttle={16}>
      {children}
    </LiveblocksProvider>
  );
}
