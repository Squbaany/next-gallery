import { clerkClient } from "@clerk/nextjs/server";
import { Button } from "~/components/ui/button";
import { deleteImage, getImage } from "~/server/queries";

export default async function FullImagePage(props: { photoId: number }) {
  const image = await getImage(props.photoId);

  const uploaderInfo = await clerkClient.users.getUser(image!.userId);

  return (
    <div className="flex h-full w-full min-w-0 items-center justify-center text-black">
      <div className="flex max-w-4xl flex-row bg-white p-1">
        <div className="flex-shrink">
          <img src={image!.url} alt={image!.name} className="object-contain" />
        </div>

        <div className="flex w-72 flex-shrink-0 flex-col gap-4 p-4">
          <div className="p-2 text-center text-xl font-bold">{image!.name}</div>
          <div className="flex flex-row">
            Uploaded by: {uploaderInfo.fullName}
          </div>
          <div className="flex flex-row">
            Uploaded on: {image?.createdAt.toLocaleDateString()}
          </div>
          <div className="flex w-full items-center justify-center py-4">
            <form
              action={async () => {
                "use server";

                await deleteImage(image!.id);
              }}
            >
              <Button type="submit" variant="destructive">
                Delete
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
