import type { Metadata } from "next";
import "./globals.css";
import "bootswatch/dist/cerulean/bootstrap.css";
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: "Lite ERP",
  description: "Versión 4 de Lite ERP",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es">
      <body>
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
