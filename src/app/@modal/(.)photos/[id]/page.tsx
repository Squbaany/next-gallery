import { Modal } from "./modal";
import FullImagePage from "~/common/full-image-page";

export default function PhotoModal({
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

  return (
    <Modal>
      <FullImagePage photoId={idAsNumber} />
    </Modal>
  );
}
