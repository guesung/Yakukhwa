type MainLinkListType = {
  mainTitle: {
    name: string;
    path: string;
  };
  subTitle: {
    name: string;
    path: string;
  }[];
}[];
export const MAINLINKLIST: MainLinkListType = [
  {
    mainTitle: { name: "월출산국화축제", path: "chrysanthemum-festival" },
    subTitle: [
      { name: "축제소개", path: "introduce" },
      { name: "프롤로그", path: "prologue" },
      { name: "연혁", path: "history" },
      { name: "축제갤러리", path: "gallery?page=1" },
    ],
  },
  {
    mainTitle: { name: "프로그램", path: "program" },
    subTitle: [
      { name: "축제일정표", path: "schedule" },
      { name: "행사장 안내", path: "venue" },
      { name: "놀GO", path: "fun-go" },
      { name: "먹GO", path: "eat-go" },
      { name: "자GO", path: "sleep-go" },
      { name: "사GO", path: "shop-go" },
    ],
  },
  {
    mainTitle: { name: "사전신청", path: "pre-application" },
    subTitle: [
      { name: "축제프로그램", path: "festival-program" },
      { name: "사전 신청", path: "pre-registration" },
    ],
  },
  {
    mainTitle: { name: "축제소식", path: "festival-news" },
    subTitle: [
      { name: "공지사항", path: "announcement?page=1" },
      { name: "이벤트", path: "event" },
      { name: "축제FAQ", path: "faq" },
      { name: "보도자료", path: "press-release" },
    ],
  },
  {
    mainTitle: { name: "여행정보", path: "travel-info" },
    subTitle: [
      { name: "영양맛지도", path: "nutrition-map" },
      { name: "먹거리", path: "food" },
      { name: "살거리", path: "shopping" },
      { name: "즐길거리", path: "entertainment" },
    ],
  },
];


type SubLinkListType = {
  title: string;
}[];

export const SUBLINKLIST: SubLinkListType = [
  { title: "영암군청" },
  { title: "문화관광" },
];
