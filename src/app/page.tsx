import Image from "next/image";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";


export default async function HomePage() {

  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {[...images, ...images, ...images].map((image) => (
          <div key={image.id} className="flex flex-col">
            <Image src={image.url} alt="" width={124} height={124} />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
