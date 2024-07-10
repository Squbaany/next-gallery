import Image from "next/image";
import { getImage } from "~/server/queries";

export default async function FullImagePage(props: { photoId: number }) {
  const image = await getImage(props.photoId);

  return (
    <div className="relative h-96 w-96">
      <Image
        src={image.url}
        alt={image.name}
        fill
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
