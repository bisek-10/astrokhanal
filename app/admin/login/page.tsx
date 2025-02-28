"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  // 🔒 Admin Credentials (Modify as needed)
  const ADMIN_CREDENTIALS = {
    username: "admin",
    password: "admin123", // Change to a secure password!
  };

  // 🔐 Handle Admin Login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); // Clear previous error

    if (
      username === ADMIN_CREDENTIALS.username &&
      password === ADMIN_CREDENTIALS.password
    ) {
      localStorage.setItem("admin", "true"); // Save admin session
      setTimeout(() => {
        router.push("/admin"); // Redirect after delay to ensure LocalStorage is saved
      }, 500);
    } else {
      setError("❌ गलत लगइन जानकारी। कृपया पुन: प्रयास गर्नुहोस्।");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#1A237E]">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full text-center transform transition-all duration-300 hover:shadow-2xl">
        <h1 className="text-3xl font-bold text-[#1A237E] mb-6">
          🔐 प्रशासन लगइन
        </h1>

        {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

        <form onSubmit={handleLogin} className="space-y-6">
          {/* Username Input */}
          <div>
            <input
              type="text"
              placeholder="👤 प्रयोगकर्ता नाम"
              required
              className="w-full p-3 border rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition-all duration-300"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          {/* Password Input */}
          <div>
            <input
              type="password"
              placeholder="🔑 पासवर्ड"
              required
              className="w-full p-3 border rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition-all duration-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-[#FFD700] text-[#1A237E] p-3 rounded-md font-semibold hover:bg-yellow-600 transition-all duration-300">
            🔓 लगइन गर्नुहोस्
          </button>
        </form>
      </div>
    </div>
  );
}
