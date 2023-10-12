import Spacing from "@/components/Spacing";

interface PageProps {
  params: {
    id: string;
  };
}
export default function page({ params: { id } }: PageProps) {
  return (
    <main className="px-50">
      <Spacing size={30} />
      <p className="text-title1">공지사항{id}</p>
      <p className="py-30 text-subtitle2">2023.09.18 | 업데이트</p>
      <hr />
      <div className="py-30 whitespace-pre-wrap text-subtitle1">
        안녕하세요, 네이버웍스입니다.
        <br />
        네이버웍스 비정기 업데이트가 2023년 9월 20일(수)에 진행됩니다..
        <br />
        자세한 업데이트 사항은 아래 내용을 확인해 주시기 바랍니다..
        <br />
        업데이트 일정 : 2023년 9월 20일(목) 오후 2시경.
        <br />
      </div>
    </main>
  );
}
