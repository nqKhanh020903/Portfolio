import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nguyễn Quốc Khánh | Portfolio",
  description: "Front-end & Mobile Developer Portfolio",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#111827] text-zinc-300 leading-relaxed tracking-wide`}>
        {children}
      </body>
    </html>
  );
}
