import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ne">
      <body className="bg-white text-black">
        <Navbar /> {/* ✅ Navbar appears ONCE for all pages */}
        <main className="min-h-screen">{children}</main>
        <Footer /> {/* ✅ Footer appears ONCE for all pages */}
      </body>
    </html>
  );
}
