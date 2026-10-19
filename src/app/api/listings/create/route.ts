
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db/prisma";

const allowedCategories = [
  "cars",
  "bikes",
  "commercial-vehicles",
  "buses-coasters",
  "rickshaws",
  "tractors-agriculture",
  "electric-vehicles",
  "luxury-classic",
];

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const title =
      typeof body.title === "string" ? body.title.trim() : "";
    const description =
      typeof body.description === "string"
        ? body.description.trim()
        : "";
    const city =
      typeof body.city === "string" ? body.city.trim() : "";
    const categorySlug =
      typeof body.categorySlug === "string"
        ? body.categorySlug
        : "";
    const price = Number(body.price);

    if (
      !title ||
      !description ||
      !city ||
      !allowedCategories.includes(categorySlug) ||
      !Number.isFinite(price) ||
      price <= 0
    ) {
      return NextResponse.json(
        { error: "Listing ki details durust nahi hain." },
        { status: 400 }
      );
    }

    // Authentication abhi configure nahi hui.
    // Seller ID request se lena secure nahi hota.
    return NextResponse.json(
      {
        error:
          "Listing save karne se pehle secure login aur seller verification setup karni hai.",
      },
      { status: 501 }
    );
  } catch {
    return NextResponse.json(
      { error: "Request process nahi ho saki." },
      { status: 400 }
    );
  }
}
