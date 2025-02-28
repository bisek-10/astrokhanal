import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="hero-section flex flex-col justify-center items-center min-h-screen text-center px-6">
      <h1 className="text-6xl font-extrabold text-yellow-400">
        एस्ट्रोखनाल – ग्रह नक्षत्रको शक्ति प्रयोग गरी आफ्नो जीवनमा सफलता,
        शान्ति, र सकारात्मक ऊर्जा ल्याउनुहोस्!
      </h1>
      <p className="text-xl text-white max-w-lg mt-4">
        विशेषज्ञ ज्योतिष, राशिफल र आध्यात्मिक मार्गदर्शन।
      </p>
      <Link
        href="/contact"
        className="mt-6 px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg text-lg transition-all duration-300 shadow-md">
        परामर्श बुक गर्नुहोस्
      </Link>
    </div>
  );
}
