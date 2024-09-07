import prisma from "@/lib/prisma";
import { userSchema } from "@/schemas/user.schema";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, username, password } = userSchema.parse(body);

    const existingUserByEmail = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUserByEmail) {
      return NextResponse.json(
        {
          user: null,
          message: "user with this email already exists",
        },
        { status: 409 }
      );
    }

    const existingUserByUsername = await prisma.user.findUnique({
      where: {
        username,
      },
    });

    if (existingUserByUsername) {
      return NextResponse.json(
        {
          user: null,
          message: "user with this username already exists",
        },
        { status: 409 }
      );
    }

    const hashedPassword = await hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        email,
        username,
        password: hashedPassword,
      },
    });

    const { password: newUserPassword, ...rest } = newUser;

    return NextResponse.json(
      {
        user: rest,
        message: "user created successfully",
      },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(
      { data: req.body, message: "something went wrong" },
      { status: 500 }
    );
  }
}
