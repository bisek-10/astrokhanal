"use client";
import { useState, useEffect } from "react";
import axios from "axios";

// 🌎 List of Country Codes
const countryCodes = [
  { code: "+977", name: "🇳🇵 नेपाल" },
  { code: "+91", name: "🇮🇳 भारत" },
  { code: "+1", name: "🇺🇸 अमेरिका" },
  { code: "+44", name: "🇬🇧 बेलायत" },
  { code: "+61", name: "🇦🇺 अस्ट्रेलिया" },
  { code: "+81", name: "🇯🇵 जापान" },
  { code: "+49", name: "🇩🇪 जर्मनी" },
  { code: "+33", name: "🇫🇷 फ्रान्स" },
  { code: "+971", name: "🇦🇪 युएई" },
  { code: "+92", name: "🇵🇰 पाकिस्तान" },
  { code: "+880", name: "🇧🇩 बंगलादेश" },
];

export default function BookingPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+977"); // Default: Nepal
  const [date, setDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");
  const [bookedSlots, setBookedSlots] = useState<string[]>([]);
  const [userBookedSlot, setUserBookedSlot] = useState(""); // Store the booked slot of the current user
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const timeSlots = [
    "08:00 AM - 08:45 AM",
    "08:45 AM - 09:30 AM",
    "09:30 AM - 10:15 AM",
    "10:15 AM - 11:00 AM",
    "11:00 AM - 11:45 AM",
    "11:45 AM - 12:30 PM",
    "12:30 PM - 01:15 PM",
    "01:15 PM - 02:00 PM",
    "02:00 PM - 02:45 PM",
    "02:45 PM - 03:30 PM",
    "03:30 PM - 04:15 PM",
  ];

  useEffect(() => {
    if (date) {
      axios.get(`/api/bookings?date=${date}`).then((res) => {
        setBookedSlots(res.data.bookedSlots || []);
      });
    }
  }, [date]);

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split("T")[0];

  // Get current time in hours and minutes
  const now = new Date();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();

  // Function to disable past time slots dynamically
  const isSlotDisabled = (slot: string) => {
    const [startTime, period] = slot.split(" - ")[0].split(" ");
    const [slotHour, slotMinute] = startTime.split(":").map(Number);

    let slotTimeHour = slotHour;
    if (period === "PM" && slotHour !== 12) slotTimeHour += 12; // Convert PM time to 24-hour format
    if (period === "AM" && slotHour === 12) slotTimeHour = 0; // Midnight case

    // If the user has booked this slot, allow them to see it as available
    if (userBookedSlot === slot) return false;

    // Disable slot if it's already booked by someone else
    if (bookedSlots.includes(slot)) return true;

    // If selected date is today, disable past time slots
    if (date === today) {
      if (
        slotTimeHour < currentHour || // Disable past hours
        (slotTimeHour === currentHour && slotMinute <= currentMinute) // Disable past minutes
      ) {
        return true;
      }
    }
    return false;
  };

  const handleBooking = async () => {
    if (!name || !phone || !date || !selectedSlot) {
      setMessage("❌ कृपया सबै जानकारी भर्नुहोस्।");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      await axios.post("/api/bookings", {
        name,
        phone: `${countryCode} ${phone}`,
        date,
        time: selectedSlot,
      });
      setMessage("✅ बुकिङ सफल भयो!");
      setUserBookedSlot(selectedSlot); // Store the user's booked slot
      setBookedSlots([...bookedSlots, selectedSlot]); // Update booked slots
    } catch (err) {
      setMessage("❌ यो समय पहिले नै बुक भइसकेको छ।");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-xl rounded-lg border border-gray-200">
      <h1 className="text-3xl font-bold text-center text-gray-800">
        📅 परामर्श बुक गर्नुहोस्
      </h1>
      <p className="text-center text-gray-500 mt-2">
        तपाईंको नाम, फोन नम्बर, मिति, र समय चयन गर्नुहोस्।
      </p>

      <div className="mt-6 space-y-4">
        {/* Name Input */}
        <input
          type="text"
          placeholder="तपाईंको नाम *"
          required
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {/* Phone Input with Country Code Dropdown */}
        <div className="flex">
          <select
            className="p-3 border rounded-l-lg bg-gray-100 focus:outline-none"
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
            placeholder="फोन नम्बर *"
            required
            className="w-full p-3 border rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        {/* Date Input */}
        <input
          type="date"
          required
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          min={today} // Disable past dates
        />

        {/* Slot Selection */}
        <select
          required
          className="w-full p-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={selectedSlot}
          onChange={(e) => setSelectedSlot(e.target.value)}>
          <option value="">समय चयन गर्नुहोस् *</option>
          {timeSlots.map((slot) => (
            <option key={slot} value={slot} disabled={isSlotDisabled(slot)}>
              {isSlotDisabled(slot) && userBookedSlot !== slot
                ? `❌ ${slot} (बुक भइसकेको)`
                : `✅ ${slot}`}
            </option>
          ))}
        </select>

        {/* Submit Button */}
        <button
          onClick={handleBooking}
          className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 disabled:bg-gray-300"
          disabled={!selectedSlot || loading}>
          {loading ? "बुकिङ हुँदैछ..." : "📅 बुकिङ गर्नुहोस्"}
        </button>
      </div>

      {message && <p className="mt-4 text-center font-semibold">{message}</p>}
    </div>
  );
}
