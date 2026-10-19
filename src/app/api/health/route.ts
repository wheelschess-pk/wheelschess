
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db/prisma";

export async function GET() {
  try {
    await prisma.$queryRaw`SELECT 1`;

    return NextResponse.json({
      status: "ok",
      database: "connected",
    });
  } catch {
    return NextResponse.json(
      {
        status: "error",
        database: "disconnected",
        message: "Database connection check failed.",
      },
      { status: 503 }
    );
  }
}
