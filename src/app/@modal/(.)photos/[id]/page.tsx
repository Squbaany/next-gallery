import { getImage } from "~/server/queries";
import Image from "next/image";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: {
    id: string;
  };
}) {
  const idAsNumber = Number(photoId);
  if (isNaN(idAsNumber)) {
    throw new Error("Invalid photo ID");
  }

  const image = await getImage(idAsNumber);

  return (
    <div className="items-center justify-center">
      <div className="relative h-96 w-96">
        <Image
          src={image.url}
          alt={image.name}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
}
