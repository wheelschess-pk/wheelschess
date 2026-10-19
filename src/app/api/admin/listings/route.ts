
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db/prisma";
import {
  requireAdmin,
  UnauthorizedError,
} from "@/lib/auth/require-admin";

export async function GET() {
  try {
    await requireAdmin();

    const listings = await prisma.vehicleListing.findMany({
      select: {
        id: true,
        title: true,
        price: true,
        city: true,
        categorySlug: true,
        status: true,
        createdAt: true,
        seller: {
          select: {
            name: true,
            email: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(listings);
  } catch (error) {
    if (error instanceof UnauthorizedError) {
      return NextResponse.json(
        { error: "Admin login required." },
        { status: 401 }
      );
    }

    return NextResponse.json(
      { error: "Listings load nahi ho sakin." },
      { status: 500 }
    );
  }
}
