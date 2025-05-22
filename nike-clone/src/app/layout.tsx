import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";

export const metadata: Metadata = {
  title: "Nike. Just Do It. Nike.com",
  description: "Nike delivers innovative products, experiences and services to inspire athletes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
