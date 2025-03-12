import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Kalro Education",
  description:
    "Kalro Education is a specialist consultancy focused exclusively on the UK education sector. We partner with Local Authorities, Mainstream and SEND school operators, and nurseries to acquire, develop, and repurpose properties into high-quality learning environments.",
  icons: {
    icon: "/k-logo.ico",
    shortcut: "/k-logo.ico",
    apple: "/k-logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
