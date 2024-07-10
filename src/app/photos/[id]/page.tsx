import FullImagePage from "~/common/full-image-page";

export default function PhotoPage({
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

  return <FullImagePage photoId={idAsNumber} />;
}
