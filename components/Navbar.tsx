import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-[#1A237E] text-white py-4 px-6 flex justify-between items-center">
      {/* 🔹 Logo (Replaces Text) */}
      <Link href="/">
        <Image
          src="/Astrokhanal-svg.svg"
          alt="AstroKhanal Logo"
          width={100}
          height={80}
        />
      </Link>

      {/* 🔹 Navigation Links */}
      <div className="space-x-6">
        <Link href="/" className="hover:text-yellow-400">
          गृहपृष्ठ
        </Link>
        <Link href="/about" className="hover:text-yellow-400">
          हाम्रो बारेमा
        </Link>
        <Link href="/services" className="hover:text-yellow-400">
          सेवा
        </Link>
        <Link href="/contact" className="hover:text-yellow-400">
          सम्पर्क
        </Link>
      </div>
    </nav>
  );
}
