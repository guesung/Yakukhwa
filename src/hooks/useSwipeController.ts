"use client";
import { useCallback, useRef, useState } from "react";

export default function useSwiperController() {
  const [slideIndex, setSlideIndex] = useState(0);
  const slideRef = useRef<any>(null);
  const hasPrev = slideIndex > 0;
  const hasNext = slideIndex < 2;

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
