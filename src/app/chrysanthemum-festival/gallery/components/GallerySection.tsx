import { GalleryListType } from "@/constants";

interface GallerySectionProps {
  galleryList: GalleryListType[];
}

export default function GallerySection({ galleryList }: GallerySectionProps) {
  return (
    <section className="gap-x-10 gap-y-20 flex flex-wrap justify-center">
      {galleryList.map((gallery) => (
        <div key={gallery.id}>
          <div
            key={gallery.id}
            className="bg-slate-200 before:block before:pb-[100%] w-250"
          />
          <p className="py-10 text-center">{gallery.title}</p>
        </div>
      ))}
    </section>
  );
}
