import "./globals.css";
import Navbar from "./components/Navbar";
import { Quicksand } from "@next/font/google";

const quicksand = Quicksand({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={quicksand.className}>
      <head />
      <body className='px-6 md:px-16 bg-gray-900 w-full'>
        <div className=''>
          <Navbar />
        </div>
        <div className='py-16 md:py-20 h-screen'>{children}</div>
      </body>
    </html>
  );
}
