import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Booking from "@/models/Booking";

export async function GET() {
  await connectToDatabase();
  const bookings = await Booking.find();
  return NextResponse.json({ bookings });
}
