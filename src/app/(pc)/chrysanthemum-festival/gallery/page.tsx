import Spacing from "@/components/Spacing";
import GallerySection from "./components/GallerySection";
import { dummyData } from "@/constants";
import PageList from "@/components/PageList";

interface PageProps {
  searchParams: {
    id: string;
  };
}
export default function page({ searchParams: { id } }: PageProps) {
  return (
    <div>
      <GallerySection galleryList={dummyData.GALLERYLIST} />

      <PageList maxPage={10} currentPage={+id} />
    </div>
  );
}
