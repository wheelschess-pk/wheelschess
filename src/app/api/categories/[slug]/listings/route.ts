
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db/prisma";

type RouteContext = {
  params: Promise<{ slug: string }>;
};

export async function GET(
  _request: Request,
  context: RouteContext
) {
  try {
    const { slug } = await context.params;

    const listings = await prisma.vehicleListing.findMany({
      where: {
        categorySlug: slug,
        status: "READY_TO_SELL",
      },
      select: {
        id: true,
        title: true,
        description: true,
        price: true,
        city: true,
        categorySlug: true,
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
      { error: "Category listings load nahi ho sakin." },
      { status: 500 }
    );
  }
}
