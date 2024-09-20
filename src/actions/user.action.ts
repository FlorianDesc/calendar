"use server";

import prisma from "@/lib/prisma";

export async function getUsersByName(name: string) {
  const users = await prisma.user.findMany({
    where: {
      OR: [{ username: { contains: name } }, { name: { contains: name } }],
    },
    select: {
      id: true,
      name: true,
      username: true,
      image: true,
    },
  });

  return users;
}
