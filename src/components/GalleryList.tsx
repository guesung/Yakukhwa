import { GalleryType } from '@/app/type';
import Image from 'next/image';

interface GallerySectionProps {
  galleryList: GalleryType[];
  isAdmin: boolean;
}

export default function GalleryList({ galleryList, isAdmin }: GallerySectionProps) {
  return (
    <section className="grid grid-cols-2 gap-x-10 gap-y-20">
      {galleryList.map((gallery) => (
        <GalleryItem gallery={gallery} key={gallery.id} />
      ))}
    </section>
  );
}

interface GalleryItemProps {
  gallery: GalleryType;
}

function GalleryItem({ gallery }: GalleryItemProps) {
  const { id, title, imageUrl } = gallery;

  return (
    <article>
      <div
        key={id}
        className="relative mx-auto flex max-w-500 overflow-hidden bg-slate-200 p-50 before:block before:pb-[100%]"
      >
        <Image src="/images/frame.png" fill alt="frame" className="z-10" />

        <Image src={imageUrl} width={400} height={400} alt={title} />
      </div>
      <p className="py-10 text-center">{title}</p>
    </article>
  );
}
