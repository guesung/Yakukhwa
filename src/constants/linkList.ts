type LinkType = {
  name: string;
  path: string;
  outLink?: boolean;
};

type MainLinkListType = Array<{
  mainTitle: LinkType;
  subTitle: LinkType[];
}>;
export const MAINLINKLIST: MainLinkListType = [
  {
    mainTitle: { name: '월출산국화축제', path: 'chrysanthemum-festival' },
    subTitle: [
      { name: '축제소개', path: 'introduce' },
      { name: '프롤로그', path: 'prologue' },
      { name: '연혁', path: 'history' },
      { name: '축제갤러리', path: 'gallery?page=1' },
    ],
  },
  {
    mainTitle: { name: '프로그램', path: 'program' },
    subTitle: [
      { name: '축제일정표', path: 'schedule' },
      { name: '행사장 안내', path: 'venue' },
      { name: '놀GO', path: 'fun-go' },
      { name: '먹GO', path: 'eat-go' },
      { name: '자GO', path: 'sleep-go' },
      { name: '사GO', path: 'shop-go' },
    ],
  },
  {
    mainTitle: { name: '사전신청', path: 'pre-application' },
    subTitle: [
      { name: '축제프로그램', path: 'festival-program' },
      { name: '사전 신청', path: 'pre-registration' },
    ],
  },
  {
    mainTitle: { name: '축제소식', path: 'festival-news' },
    subTitle: [
      { name: '공지사항', path: 'announcement?page=1' },
      { name: '이벤트', path: 'event' },
      { name: '축제FAQ', path: 'faq' },
      { name: '보도자료', path: 'press-release' },
    ],
  },
  {
    mainTitle: { name: '여행정보', path: 'travel-info' },
    subTitle: [
      {
        name: '영양맛지도',
        path: 'https://www.yeongam.go.kr/home/tour/food/food_03_02/yeongam.go',
        outLink: true,
      },
      {
        name: '먹거리',
        path: 'https://www.yeongam.go.kr/home/tour/food/yeongam.go',
        outLink: true,
      },
      {
        name: '살거리',
        path: 'https://www.yeongam.go.kr/home/tour/shopping/yeongam.go',
        outLink: true,
      },
      {
        name: '즐길거리',
        path: 'https://www.yeongam.go.kr/home/tour/enjoy/yeongam.go',
        outLink: true,
      },
    ],
  },
];

type SubLinkListType = LinkType[];

export const SUBLINKLIST: SubLinkListType = [
  { name: '영암군청', path: 'http://www.yeongam.go.kr' },
  { name: '문화관광', path: 'https://www.yeongam.go.kr/home/tour' },
];

type InfoLinkListType = LinkType[];

export const InfoLinkList: InfoLinkListType = [
  {
    name: '참여프로그램',
    path: '/program/schedule',
  },
  {
    name: '2023포스터',
    path: '/poster',
  },
];
