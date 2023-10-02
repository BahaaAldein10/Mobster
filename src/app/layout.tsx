import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobster",
  description: "Manage your finance easier with our mobile app.",
  icons: {
    icon: "./logo2.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
