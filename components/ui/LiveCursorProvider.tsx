"use client";
import { useMyPresence, useOthers } from "@liveblocks/react/suspense";
import { PointerEvent } from "react";

export default function LiveCursorProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [myPresence, updateMyPresence] = useMyPresence();
  const others = useOthers();

  function handlePointerMove(e: PointerEvent<HTMLDivElement>) {
    // Update clientX and clientY
    const cursor = { x: Math.floor(e.pageX), y: Math.floor(e.pageY) };
    updateMyPresence({ cursor });
  }

  function handlePointerLeave(e: PointerEvent<HTMLDivElement>) {
    // Update clientX and clientY
    updateMyPresence({ cursor: null });
  }

  return (
    <div onPointerMove={handlePointerMove} onPointerLeave={handlePointerLeave}>
      {others
        .filter((o) => o.presence.cursor)
        .map(({ connectionId, presence, info }) => (
          <FollowPointer
            key={connectionId}
            info={info}
            x={presence.cursor.x}
            y={presence.cursor.y}
          />
        ))}
    </div>
  );
}
