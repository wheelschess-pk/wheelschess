
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db/prisma";
import {
  requireAdmin,
  UnauthorizedError,
} from "@/lib/auth/require-admin";

export async function GET() {
  try {
    await requireAdmin();

    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(users);
  } catch (error) {
    if (error instanceof UnauthorizedError) {
      return NextResponse.json(
        { error: "Admin login required." },
        { status: 401 }
      );
    }

    return NextResponse.json(
      { error: "Users load nahi ho sake." },
      { status: 500 }
    );
  }
}
