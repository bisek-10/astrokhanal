import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
  date: String,
  time: String,
  name: String,
  phone: String,
  status: { type: String, default: "Booked" },
});

export default mongoose.models.Booking ||
  mongoose.model("Booking", BookingSchema);
