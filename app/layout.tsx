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
      <body className='px-4 md:px-6 lg:px-16 bg-gray-900 w-full'>
        <div className=''>
          <Navbar />
        </div>
        <div className='py-12 md:py-16 h-screen'>{children}</div>
      </body>
    </html>
  );
}
