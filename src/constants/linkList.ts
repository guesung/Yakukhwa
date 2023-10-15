type LinkType = {
  name: string;
  path: string;
  outLink?: boolean;
  banner?: string;
};

type MainLinkListType = Array<{
  mainTitle: LinkType;
  subTitle: LinkType[];
}>;
export const MAINLINKLIST: MainLinkListType = [
  {
    mainTitle: { name: '월출산국화축제', path: 'chrysanthemum-festival' },
    subTitle: [
      { name: '축제소개', path: 'introduce', banner: '월출산국화축제란?' },
      { name: '프롤로그', path: 'prologue', banner: '월출산국화축제 발자취' },
      { name: '연혁', path: 'history', banner: '프롤로그' },
      { name: '축제갤러리', path: 'gallery?page=1', banner: '축제갤러리' },
    ],
  },
  {
    mainTitle: { name: '프로그램', path: 'program' },
    subTitle: [
      { name: '축제일정표', path: 'schedule', banner: '축제일정표' },
      { name: '행사장 안내', path: 'venue', banner: '행사장안내' },
      { name: '놀GO', path: 'fun-go', banner: '놀GO' },
      { name: '먹GO', path: 'eat-go', banner: '먹GO' },
      { name: '자GO', path: 'sleep-go', banner: '자GO' },
      { name: '사GO', path: 'shop-go', banner: '사GO' },
    ],
  },
  {
    mainTitle: { name: '사전신청', path: 'pre-application' },
    subTitle: [
      { name: '축제프로그램', path: 'festival-program', banner: '축제프로그램' },
      { name: '사전 신청', path: 'pre-registration', banner: '사전신청' },
    ],
  },
  {
    mainTitle: { name: '축제소식', path: 'festival-news' },
    subTitle: [
      { name: '공지사항', path: 'announcement?page=1', banner: '축제소식', type: 'board' },
      { name: '이벤트', path: 'event', banner: '이벤트' },
      { name: '축제FAQ', path: 'faq', banner: '축제FAQ' },
      { name: '보도자료', path: 'press-release', banner: '보도자료' },
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
