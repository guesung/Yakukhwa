type LinkType = {
  name: string;
  path: string;
  banner?: string;
  type?: 'gallery' | 'card' | 'board' | 'schedule' | 'outLink';
};

type MainLinkListType = Array<{
  mainTitle: LinkType;
  subTitle: LinkType[];
}>;

export const MAIN_LINK_LIST: MainLinkListType = [
  {
    mainTitle: { name: '월출산국화축제', path: 'chrysanthemum-festival' },
    subTitle: [
      { name: '축제소개', path: 'introduce', banner: '월출산국화축제란?' },
      { name: '연혁', path: 'history', banner: '연혁' },
      { name: '축제갤러리', path: 'gallery', banner: '축제갤러리', type: 'gallery' },
    ],
  },
  {
    mainTitle: { name: '프로그램', path: 'program' },
    subTitle: [
      { name: '축제일정표', path: 'schedule', banner: '축제일정표' },
      { name: '행사장 안내', path: 'venue', banner: '행사장안내' },
      { name: '놀GO', path: 'fun-go', banner: '놀GO', type: 'card' },
      { name: '먹GO', path: 'eat-go', banner: '먹GO', type: 'card' },
      { name: '자GO', path: 'sleep-go', banner: '자GO', type: 'card' },
      { name: '사GO', path: 'shop-go', banner: '사GO', type: 'card' },
    ],
  },
  {
    mainTitle: { name: '사전신청', path: 'pre-application' },
    subTitle: [
      { name: '축제프로그램', path: 'festival-program', banner: '축제프로그램', type: 'card' },
    ],
  },
  {
    mainTitle: { name: '축제소식', path: 'festival-news' },
    subTitle: [
      { name: '공지사항', path: 'announcement', banner: '축제소식', type: 'board' },
      { name: '이벤트', path: 'event', banner: '이벤트', type: 'board' },
      { name: '축제FAQ', path: 'faq', banner: '축제FAQ', type: 'board' },
      { name: '보도자료', path: 'press-release', banner: '보도자료', type: 'board' },
    ],
  },
  {
    mainTitle: { name: '여행정보', path: 'travel-info' },
    subTitle: [
      {
        name: '영양맛지도',
        path: 'https://www.yeongam.go.kr/home/tour/food/food_03_02/yeongam.go',
        type: 'outLink',
      },
      {
        name: '먹거리',
        path: 'https://www.yeongam.go.kr/home/tour/food/yeongam.go',
        type: 'outLink',
      },
      {
        name: '살거리',
        path: 'https://www.yeongam.go.kr/home/tour/shopping/yeongam.go',
        type: 'outLink',
      },
      {
        name: '즐길거리',
        path: 'https://www.yeongam.go.kr/home/tour/enjoy/yeongam.go',
        type: 'outLink',
      },
    ],
  },
];

export const ADMIN_LINK_LIST: LinkType[] = [
  {
    name: '메인 이미지',
    path: 'main-image',
    type: 'gallery',
  },
  {
    name: '스케줄',
    path: 'schedule',
    type: 'schedule',
  },
];

export const SUBLINKLIST: LinkType[] = [
  { name: '영암군청', path: 'http://www.yeongam.go.kr' },
  { name: '문화관광', path: 'https://www.yeongam.go.kr/home/tour' },
];

export const InfoLinkList: LinkType[] = [
  {
    name: '참여프로그램',
    path: '/program/schedule',
  },
  {
    name: '2023포스터',
    path: '/poster',
  },
];
