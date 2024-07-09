import Link from "next/link";
import Image from "next/image";

const mockUrl = [
  "https://utfs.io/f/fb6cef04-c21b-408e-9a78-df41275ec3ba-1tafy.jpg",
  "https://utfs.io/f/d885884d-1d65-45f5-be36-1ee022eb6824-1tafx.jpg",
  "https://utfs.io/f/bae7121d-66be-4aa4-ba98-9c1ae3ba90d8-1tafw.jpg",
  "https://utfs.io/f/6f3f842c-9bf3-402e-b088-9ab6fdcc8d3b-1tafv.jpg"
]

const mockImage = mockUrl.map((url, index) => ({
  id: index + 1,
  url,
}))

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {[...mockImage, ...mockImage, ...mockImage].map((image) => (
          <div key={image.id}>
            <Image src={image.url} alt="" width={124} height={124} />
          </div>
        ))}
      </div>
    </main>
  );
}
