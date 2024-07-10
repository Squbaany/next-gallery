import { auth } from "@clerk/nextjs/server";
import { db } from "./db";
import "server-only";

export async function getImages() {
  const user = auth();

  if (!user.userId) {
    throw new Error("Unauthorized");
  }

  const images = await db.query.images.findMany({
    where: (model, { eq }) => eq(model.userId, user.userId),
    orderBy: (model, { desc }) => desc(model.id),
  });

  return images;
}

export async function getImage(id: number) {
  const user = auth();

  if (!user.userId) {
    throw new Error("Unauthorized");
  }

  const image = await db.query.images.findFirst({
    where: (model, { and, eq }) =>
      and(eq(model.id, id), eq(model.userId, user.userId)),
  });

  return image;
}
