export type Posting = {
  id: string;
  title: string;
  date: string;
  content: string;
};

export type CardType = {
  id: string;
  title: string;
  date: string;
  place: string;
  content: string;
  imageUrl?: string;
};

export interface GalleryType {
  id: string;
  title: string;
  imageUrl: string;
}

export interface Schedule {
  date: string;
  scheduleList: Array<{
    time: string;
    place: string;
  }>;
}
