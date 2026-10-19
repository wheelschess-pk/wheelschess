
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db/prisma";

export async function GET() {
  try {
    const listings = await prisma.vehicleListing.findMany({
      where: {
        status: "READY_TO_SELL",
      },
      select: {
        id: true,
        title: true,
        description: true,
        price: true,
        city: true,
        categorySlug: true,
        status: true,
        createdAt: true,
        seller: {
          select: {
            name: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(listings);
  } catch {
    return NextResponse.json(
      { error: "Listings load nahi ho sakin. Database connection check karein." },
      { status: 500 }
    );
  }
}
