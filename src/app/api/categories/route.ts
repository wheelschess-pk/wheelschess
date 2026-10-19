
import { NextResponse } from "next/server";

const categories = [
  { name: "Cars", slug: "cars" },
  { name: "Bikes", slug: "bikes" },
  { name: "Commercial Vehicles", slug: "commercial-vehicles" },
  { name: "Buses & Coasters", slug: "buses-coasters" },
  { name: "Rickshaws", slug: "rickshaws" },
  { name: "Tractors & Agriculture", slug: "tractors-agriculture" },
  { name: "Electric Vehicles", slug: "electric-vehicles" },
  { name: "Luxury & Classic", slug: "luxury-classic" },
  { name: "Showpiece", slug: "showpiece", adminOnly: true },
  { name: "Spare Parts", slug: "spare-parts", adminOnly: true },
];

export async function GET() {
  return NextResponse.json(categories);
}
