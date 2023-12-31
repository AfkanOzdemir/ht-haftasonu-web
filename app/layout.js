import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-primary w-full h-screen overflow-hidden">
        <Navbar />
        <div className="w-full h-screen flex items-center justify-center relative">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
