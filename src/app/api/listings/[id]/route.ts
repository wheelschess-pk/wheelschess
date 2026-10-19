
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db/prisma";

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function GET(
  _request: Request,
  context: RouteContext
) {
  try {
    const { id } = await context.params;

    const listing = await prisma.vehicleListing.findFirst({
      where: {
        id,
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
    });

    if (!listing) {
      return NextResponse.json(
        { error: "Listing nahi mili." },
        { status: 404 }
      );
    }

    return NextResponse.json(listing);
  } catch {
    return NextResponse.json(
      { error: "Server ya database mein masla hai." },
      { status: 500 }
    );
  }
}
