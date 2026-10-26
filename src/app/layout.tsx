import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lite ERP v4",
  description: "Versión 4 del proyecto ERP",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <div className="h-screen flex flex-col bg-base-100 overflow-hidden">{children}</div>
      </body>
    </html>
  );
}
