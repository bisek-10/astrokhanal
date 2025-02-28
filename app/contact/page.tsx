"use client";
import { useState } from "react";

const countryCodes = [
  { code: "+977", name: "🇳🇵 नेपाल (Nepal)" },
  { code: "+91", name: "🇮🇳 भारत (India)" },
  { code: "+1", name: "🇺🇸 अमेरिका (USA)" },
  { code: "+44", name: "🇬🇧 बेलायत (UK)" },
  { code: "+61", name: "🇦🇺 अस्ट्रेलिया (Australia)" },
  { code: "+81", name: "🇯🇵 जापान (Japan)" },
  { code: "+49", name: "🇩🇪 जर्मनी (Germany)" },
  { code: "+33", name: "🇫🇷 फ्रान्स (France)" },
  { code: "+971", name: "🇦🇪 युएई (UAE)" },
  { code: "+92", name: "🇵🇰 पाकिस्तान (Pakistan)" },
  { code: "+880", name: "🇧🇩 बंगलादेश (Bangladesh)" },
  { code: "+7", name: "🇷🇺 रूस (Russia)" },
  { code: "+86", name: "🇨🇳 चीन (China)" },
  { code: "+39", name: "🇮🇹 इटाली (Italy)" },
  { code: "+55", name: "🇧🇷 ब्राजिल (Brazil)" },
  { code: "+27", name: "🇿🇦 दक्षिण अफ्रिका (South Africa)" },
  { code: "+82", name: "🇰🇷 दक्षिण कोरिया (South Korea)" },
  { code: "+34", name: "🇪🇸 स्पेन (Spain)" },
  { code: "+60", name: "🇲🇾 मलेसिया (Malaysia)" },
  { code: "+41", name: "🇨🇭 स्विट्जरल्याण्ड (Switzerland)" },
];

export default function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+977"); // Default: Nepal
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    setError("");

    // ✅ Check if Name & Phone are Empty
    if (!name.trim() || !phone.trim()) {
      setError("❌ कृपया नाम र फोन नम्बर अनिवार्य रूपमा भर्नुहोस्।");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("phone", `${countryCode} ${phone}`);
    formData.append("email", email);

    try {
      const response = await fetch("https://formspree.io/f/xovjgawy", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setMessage(
          "✅ तपाईंको अनुरोध सफलतापूर्वक पठाइएको छ। हामी चाँडै सम्पर्क गर्नेछौं!"
        );
        setTimeout(() => {
          setMessage("");
          setError("");
          setName("");
          setPhone("");
          setEmail("");
        }, 3000);
      } else {
        setError("❌ समस्या भयो! कृपया पछि प्रयास गर्नुहोस्।");
      }
    } catch (error) {
      setError("❌ समस्या भयो! कृपया पछि प्रयास गर्नुहोस्।");
    }
  };

  return (
    <div className="contact-container">
      <h2 className="text-3xl font-bold text-white mb-6">📞 सम्पर्क फारम</h2>

      {/* 📌 Contact Form Box */}
      <div className="contact-box">
        <form onSubmit={handleSubmit} className="w-full space-y-4">
          <input
            type="text"
            placeholder="👤 नाम *"
            required
            className="contact-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          {/* 📞 Phone Input with Country Code Dropdown */}
          <div className="phone-container">
            <select
              className="contact-dropdown"
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}>
              {countryCodes.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.name} {country.code}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="📞 फोन नम्बर *"
              required
              className="contact-input"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <input
            type="email"
            placeholder="✉️ इमेल (Optional)"
            className="contact-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button type="submit" className="contact-button">
            📩 पठाउनुहोस्
          </button>
        </form>

        {/* ❌ Error Message */}
        {error && <p className="contact-message text-red-500">{error}</p>}

        {/* ✅ Success Message */}
        {message && <p className="contact-message text-green-500">{message}</p>}
      </div>
    </div>
  );
}
