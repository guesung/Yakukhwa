type MainLinkListType = {
  mainTitle: string;
  subTitle: string[];
}[];

export const MAINLINKLIST: MainLinkListType = [
  {
    mainTitle: "월출산국화축제",
    subTitle: ["축제소개", "프롤로그", "연혁", "축제갤러리"],
  },
  {
    mainTitle: "프로그램",
    subTitle: ["축제일정표", "행사장 안내", "놀GO", "먹GO", "자GO", "사GO"],
  },
  {
    mainTitle: "사전신청",
    subTitle: ["축제프로그램", " 사전 신청"],
  },
  {
    mainTitle: "축제소식",
    subTitle: ["공지사항", "이벤트", "축제FAQ", "보도자료"],
  },
  {
    mainTitle: "여행정보",
    subTitle: ["영양맛지도", "먹거리", "살거리", "즐길거리"],
  },
];

type SubLinkListType = {
  title: string;
}[];

export const SUBLINKLIST: SubLinkListType = [
  { title: "영암군청" },
  { title: "문화관광" },
];
