'use client';
import { useCallback, useRef, useState } from 'react';

interface UseSwiperControllerProps {
  maxPage: number;
}

export default function useSwiperController({ maxPage }: UseSwiperControllerProps) {
  const [slideIndex, setSlideIndex] = useState(0);
  const slideRef = useRef<any>(null);
  const hasPrev = slideIndex > 0 || maxPage === Infinity;
  const hasNext = slideIndex < maxPage - 1 || maxPage === Infinity;

  const handlePrev = useCallback(() => {
    if (slideRef.current && hasPrev) slideRef.current.swiper.slidePrev();
    setSlideIndex((slideIndex) => slideIndex - 1);
  }, [hasPrev]);

  const handleNext = useCallback(() => {
    if (slideRef.current && hasNext) slideRef.current.swiper.slideNext();
    setSlideIndex((slideIndex) => slideIndex + 1);
  }, [hasNext]);
  return { slideRef, slideIndex, handlePrev, handleNext, hasPrev, hasNext };
}
