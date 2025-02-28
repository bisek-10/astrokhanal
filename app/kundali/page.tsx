"use client";
import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

export default function Kundali() {
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [birthTime, setBirthTime] = useState("");
  const [birthPlace, setBirthPlace] = useState("");
  const [kundaliData, setKundaliData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGenerateKundali = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/kundali",
        {
          name,
          birthDate,
          birthTime,
          birthPlace,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      setKundaliData(response.data);
    } catch (err) {
      console.error("Error generating Kundali:", err);
      setError("Failed to generate Kundali. Please try again.");
    }
    setLoading(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      <h1 className="text-3xl font-bold text-center text-indigo-700">
        🔮 Generate Your Kundali
      </h1>
      <p className="text-center text-gray-600 mt-2">
        Enter your birth details to get your Kundali report.
      </p>

      <div className="mt-6 space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="date"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
        <input
          type="time"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
          value={birthTime}
          onChange={(e) => setBirthTime(e.target.value)}
        />
        <input
          type="text"
          placeholder="Birth Place"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
          value={birthPlace}
          onChange={(e) => setBirthPlace(e.target.value)}
        />

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleGenerateKundali}
          className="w-full bg-indigo-600 text-white p-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300">
          {loading ? "Generating..." : "Generate Kundali"}
        </motion.button>
      </div>

      {error && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-red-600 mt-4 text-center">
          {error}
        </motion.p>
      )}

      {kundaliData && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-6 p-5 bg-gray-100 rounded-lg shadow-md border border-gray-300">
          <h2 className="text-xl font-bold text-indigo-700 text-center">
            🔮 Your Kundali Report
          </h2>
          <p className="text-lg mt-3">
            <strong>🌞 Sun Sign:</strong> {kundaliData.sun_sign}
          </p>
          <p className="text-lg">
            <strong>🌟 Nakshatra:</strong> {kundaliData.nakshatra}
          </p>
          <p className="text-lg">
            <strong>🌀 Lagna (Ascendant):</strong> {kundaliData.lagna}
          </p>
        </motion.div>
      )}
    </motion.div>
  );
}
