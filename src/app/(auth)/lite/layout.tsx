import { ReactNode } from "react";

export default function LiteLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex flex-col border min-h-0 flex-1 bg-gray-100">
      {children}
    </main>
  );
}
