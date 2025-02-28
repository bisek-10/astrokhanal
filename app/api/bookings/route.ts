import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Booking from "@/models/Booking";

export async function GET(req: Request) {
  await connectToDatabase();
  const url = new URL(req.url);
  const date = url.searchParams.get("date");

  if (!date)
    return NextResponse.json({ error: "मिति आवश्यक छ।" }, { status: 400 });

  const bookings = await Booking.find({ date }).select("time -_id");
  return NextResponse.json({ bookedSlots: bookings.map((b) => b.time) });
}

export async function POST(req: Request) {
  await connectToDatabase();
  const { name, phone, date, time } = await req.json();

  // Check if slot is already booked
  const existingBooking = await Booking.findOne({ date, time });
  if (existingBooking)
    return NextResponse.json(
      { error: "यो समय पहिले नै बुक भइसकेको छ।" },
      { status: 400 }
    );

  const newBooking = new Booking({ name, phone, date, time });
  await newBooking.save();

  return NextResponse.json({ message: "बुकिङ सफल भयो!", booking: newBooking });
}
