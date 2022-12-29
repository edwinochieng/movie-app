import "./globals.css";
import Navbar from "./components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head />
      <body className='px-6 md:px-16 bg-gray-900 2xl:max-w-[1280px] w-full'>
        <div className=''>
          <Navbar />
        </div>
        <div className='py-16 md:py-20 h-screen'>{children}</div>
      </body>
    </html>
  );
}
