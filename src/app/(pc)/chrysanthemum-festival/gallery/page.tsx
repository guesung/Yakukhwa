import Spacing from "@/components/Spacing";
import GallerySection from "./components/GallerySection";
import { dummyData } from "@/constants";
import PageList from "@/components/PageList";

interface PageProps {
  searchParams: {
    id: string;
  };
}
const pageList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function page({ searchParams: { id } }: PageProps) {
  return (
    <div>
      <h1>국화갤러리</h1>
      <h2>영암 월출산 국화축제에서</h2>
      <h2>눈길을 사로잡는 작품들의 시각적 아름다움을 느껴보세요!</h2>

      <Spacing size={20} />
      <hr />
      <Spacing size={20} />

      <GallerySection galleryList={dummyData.GALLERYLIST} />

      <PageList maxPage={10} currentPage={+id} />
    </div>
  );
}
