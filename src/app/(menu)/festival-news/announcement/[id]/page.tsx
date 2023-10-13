import Posting from "@/components/Posting";
import Spacing from "@/components/Spacing";
import { getData } from "@/utils/firebaseController";

interface PageProps {
  params: {
    id: string;
  };
}

export default async function page({ params: { id } }: PageProps) {
  const announcementList = await getData("announcement");
  const announcementItem = announcementList.find((item) => item.id === id);

  return <Posting data={announcementItem} />;
}
