'use client';
import { GalleryType } from '@/app/type';
import { deleteData } from '@/utils';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface GallerySectionProps {
  galleryList: GalleryType[];
  isAdmin: boolean;
  category: string;
}

export default function GalleryList({ galleryList, isAdmin, category }: GallerySectionProps) {
  return (
    <section className="columns-2">
      {galleryList.map((gallery) => (
        <GalleryItem gallery={gallery} key={gallery.id} isAdmin={isAdmin} category={category} />
      ))}
    </section>
  );
}

interface GalleryItemProps {
  gallery: GalleryType;
  isAdmin: boolean;
  category: string;
}

function GalleryItem({ gallery, isAdmin, category }: GalleryItemProps) {
  const { id, title, imageUrl } = gallery;
  const router = useRouter();
  const handleDeleteCard = async (id: string) => {
    if (confirm('정말로 삭제하시겠습니까?')) {
      await deleteData(category, id);
      alert('삭제되었습니다.');
      router.refresh();
    }
  };

  return (
    <article>
      <div
        key={id}
        className="relative mx-auto my-20 flex max-w-450 overflow-hidden bg-slate-200 p-50 before:block before:pb-[100%]"
      >
        <Image src="/images/frame.png" fill alt="frame" className="z-10" />
        {isAdmin && (
          <span
            className="absolute right-10 top-10 z-[100] cursor-pointer text-title3"
            onClick={() => handleDeleteCard(id)}
          >
            X
          </span>
        )}

        <Image src={imageUrl} width={400} height={400} alt={title} />
      </div>
      {/* <p className="py-10 text-center">{title}</p> */}
    </article>
  );
}
