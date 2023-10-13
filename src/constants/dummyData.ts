export const dummyData = {
  ANNOUNCEMENT: [
    {
      id: "1",
      title: "Paid",
      date: "2023년 10월 7일",
    },
    {
      id: "2",
      title: "Pending",
      date: "2023년 10월 7일",
    },
    {
      id: "3",
      title: "Unpaid",
      date: "2023년 10월 7일",
    },
    {
      id: "4",
      title: "Paid",
      date: "2023년 10월 7일",
    },
    {
      id: "5",
      title: "Paid",
      date: "2023년 10월 7일",
    },
  ],
  GALLERYLIST: [
    {
      id: "1",
      title: "월출산국화축제",
      image: "/images/gallery/1.jpeg",
    },
    {
      id: "2",
      title: "월출산국화축제",
      image: "/images/gallery/2.jpeg",
    },
    {
      id: "3",
      title: "월출산국화축제",
      image: "/images/gallery/3.jpeg",
    },
    {
      id: "4",
      title: "월출산국화축제",
      image: "/images/gallery/4.jpeg",
    },
    {
      id: "5",
      title: "월출산국화축제",
      image: "/images/gallery/5.jpeg",
    },
    {
      id: "6",
      title: "월출산국화축제",
      image: "/images/gallery/6.jpeg",
    },
    {
      id: "7",
      title: "월출산국화축제",
      image: "/images/gallery/7.jpeg",
    },

  ],
};
export interface AnnouncementType {
  id: string;
  title: string;
  date: string;
}

export interface GalleryListType {
  id: string;
  title: string;
  image: string;
}
