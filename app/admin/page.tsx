"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function AdminPanel() {
  const [bookings, setBookings] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const router = useRouter();

  useEffect(() => {
    // 🔒 Check if Admin is Logged In
    const isAdmin = localStorage.getItem("admin");
    if (!isAdmin) {
      router.push("/admin/login"); // Redirect to login page if not authenticated
    }
  }, [router]);

  useEffect(() => {
    if (selectedDate) {
      fetchBookings();
    } else {
      setBookings([]);
    }
  }, [selectedDate]);

  const fetchBookings = async () => {
    try {
      const response = await axios.get(
        `/api/admin/bookings?date=${selectedDate}`
      );
      const sortedBookings = response.data.bookings.sort((a, b) => {
        return (
          new Date(`1970/01/01 ${a.time}`) - new Date(`1970/01/01 ${b.time}`)
        );
      });
      setBookings(sortedBookings);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold text-center text-[#1A237E]">
        🛠 प्रशासन प्यानल
      </h1>

      {/* 📅 Date Selector */}
      <div className="mt-6 text-center">
        <label className="block font-semibold text-lg text-[#1A237E]">
          📅 मिति चयन गर्नुहोस्:
        </label>
        <input
          type="date"
          className="mt-2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </div>

      {/* 📋 Bookings Table */}
      {selectedDate && (
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-center text-[#1A237E]">
            📜 बुकिङ सूची ({selectedDate})
          </h2>

          {bookings.length === 0 ? (
            <p className="text-center text-gray-500 mt-4">
              📌 यो मितिका लागि कुनै बुकिङ छैन।
            </p>
          ) : (
            <div className="mt-6 overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead className="bg-[#1A237E] text-white">
                  <tr>
                    <th className="border border-gray-300 p-3 text-left">#</th>
                    <th className="border border-gray-300 p-3 text-left">
                      ⏰ समय
                    </th>
                    <th className="border border-gray-300 p-3 text-left">
                      👤 नाम
                    </th>
                    <th className="border border-gray-300 p-3 text-left">
                      📞 फोन
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((booking, index) => (
                    <tr key={index} className="hover:bg-gray-100">
                      <td className="border border-gray-300 p-3">
                        {index + 1}
                      </td>
                      <td className="border border-gray-300 p-3">
                        {booking.time}
                      </td>
                      <td className="border border-gray-300 p-3">
                        {booking.name}
                      </td>
                      <td className="border border-gray-300 p-3">
                        {booking.phone}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
