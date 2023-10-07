export const dummyData = {
  ANNOUNCEMENT: [
    {
      invoice: "1",
      title: "Paid",
      date: "2023년 10월 7일",
    },
    {
      invoice: "2",
      title: "Pending",
      date: "2023년 10월 7일",
    },
    {
      invoice: "3",
      title: "Unpaid",
      date: "2023년 10월 7일",
    },
    {
      invoice: "4",
      title: "Paid",
      date: "2023년 10월 7일",
    },
    {
      invoice: "5",
      title: "Paid",
      date: "2023년 10월 7일",
    },
  ],
  GALLERYLIST: [
    {
      id: "1",
      title: "월출산국화축제",
      image: "/images/gallery/1/1.jpg",
    },
    {
      id: "2",
      title: "월출산국화축제",
      image: "/images/gallery/1/2.jpg",
    },
    {
      id: "3",
      title: "월출산국화축제",
      image: "/images/gallery/1/3.jpg",
    },
    {
      id: "4",
      title: "월출산국화축제",
      image: "/images/gallery/1/4.jpg",
    },
  ],
};
export interface AnnouncementType {
  invoice: string;
  title: string;
  date: string;
}

export interface GalleryListType {
  id: string;
  title: string;
  image: string;
}
