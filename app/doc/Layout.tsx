import { LiveBlocksProvider } from "@/components/ui/LiveBlocksProvider";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LiveBlocksProvider>{children}</LiveBlocksProvider>;
}
