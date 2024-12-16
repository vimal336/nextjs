import { auth, currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
    const { userId } = await auth(); // Checks authentication and retrieves userId
    const user = await currentUser(); // Fetches user details

    return NextResponse.json(
        {
            message: "Authenticated",
            data: {
                userId: userId,
                username: user?.username, // User's username if available
                email: user?.primaryEmailAddress?.emailAddress // User's primary email address if available
            },
        },
        { status: 200 }
    );
}
