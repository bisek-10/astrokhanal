import mongoose from "mongoose";

const KundaliSchema = new mongoose.Schema({
  name: String,
  birthDate: String,
  birthTime: String,
  birthPlace: String,
  rashi: String,
  nakshatra: String,
});

export default mongoose.models.Kundali ||
  mongoose.model("Kundali", KundaliSchema);
