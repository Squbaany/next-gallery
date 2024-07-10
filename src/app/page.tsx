import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { getImages } from "~/server/queries";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getImages();

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {images.map((image) => (
        <div key={image.id} className="flex flex-col">
          <Link href={`/photos/${image.id}`}>
            <div className="relative h-48 w-48">
              <Image
                src={image.url}
                alt={image.name}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="bg-white p-1 text-center text-black">
              {image.name}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main>
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">Please sign in</div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
