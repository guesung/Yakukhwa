import { GalleryListType } from "@/constants";
import Image from "next/image";

interface GallerySectionProps {
  galleryList: GalleryListType[];
}

export default function GallerySection({ galleryList }: GallerySectionProps) {
  return (
    <section className="gap-x-10 gap-y-20 grid grid-cols-2">
      {galleryList.map((gallery) => (
        <div key={gallery.id}>
          <div
            key={gallery.id}
            className="bg-slate-200 before:block relative before:pb-[100%] max-w-500 flex mx-auto"
          >
            <Image src="/images/frame.png" fill alt="frame" className="z-10" />

            <Image key={gallery.image} src={gallery.image} fill alt={"image"} />
          </div>
          <p className="py-10 text-center">{gallery.title}</p>
        </div>
      ))}
    </section>
  );
}
