import { PrismaClient, corporate_activity } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";

const prisma: PrismaClient = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const { id, published_status }: corporate_activity = await request.json();
    const updatePublished = await prisma.corporate_activity.update({
      data: {
        published_status: !published_status
      },
      where: {
        id: id,
      },
    });

    return NextResponse.json(
      { message: "Change Success", data: updatePublished },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.log(error);
    return NextResponse.json(
      { message: "Change Unsuccess", data: error },
      { status: 500 }
    );
  }
}
