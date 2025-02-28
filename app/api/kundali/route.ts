import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Kundali from "@/models/Kundali";

export async function POST(req: Request) {
  await connectToDatabase();
  const { name, birthDate, birthTime, birthPlace } = await req.json();

  const newKundali = new Kundali({
    name,
    birthDate,
    birthTime,
    birthPlace,
    rashi: "Mesh (Aries)",
    nakshatra: "Ashwini",
  });

  await newKundali.save();
  return NextResponse.json(newKundali);
}
