
import { NextResponse } from "next/server";

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function PATCH(
  request: Request,
  context: RouteContext
) {
  try {
    const { id } = await context.params;
    const body = await request.json();

    const allowedStatuses = [
      "READY_TO_SELL",
      "REJECTED",
      "INACTIVE",
    ];

    if (
      !id ||
      typeof body.status !== "string" ||
      !allowedStatuses.includes(body.status)
    ) {
      return NextResponse.json(
        { error: "Listing ID ya status durust nahi hai." },
        { status: 400 }
      );
    }

    // Secure admin authentication abhi configure nahi hui.
    // Is liye listing ka status change nahi kiya jayega.
    return NextResponse.json(
      {
        error:
          "Status change karne se pehle secure admin authentication zaroori hai.",
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
