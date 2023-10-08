"use client";
import { useCallback, useRef, useState } from "react";

interface UseSwiperControllerProps {
  maxPage: number;
}

export default function useSwiperController({
  maxPage,
}: UseSwiperControllerProps) {
  const [slideIndex, setSlideIndex] = useState(0);
  const slideRef = useRef<any>(null);
  const hasPrev = slideIndex > 0;
  const hasNext = slideIndex < maxPage - 1;

  const handlePrev = useCallback(() => {
    if (!slideRef.current || !hasPrev) return;
    slideRef.current.swiper.slidePrev();
    setSlideIndex((slideIndex) => slideIndex - 1);
  }, [hasPrev]);

  const handleNext = useCallback(() => {
    if (!slideRef.current || !hasNext) return;
    slideRef.current.swiper.slideNext();
    setSlideIndex((slideIndex) => slideIndex + 1);
  }, [hasNext]);
  return { slideRef, slideIndex, handlePrev, handleNext, hasPrev, hasNext };
}
