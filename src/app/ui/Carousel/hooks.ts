"use client";

import React from "react";
import Flicking from "@egjs/react-flicking";
import { CarouselItem, CarouselHookReturn } from "./types";

/**
 * Hook for managing carousel state and providing control functions
 */
export const useCarousel = (items: CarouselItem[]): CarouselHookReturn => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const flickingRef = React.useRef<Flicking>(null);

  const goToSlide = (index: number) => {
    flickingRef.current?.moveTo(index);
  };

  const nextSlide = () => {
    flickingRef.current?.next();
  };

  const prevSlide = () => {
    flickingRef.current?.prev();
  };

  const handleMove = (event: { index: number }) => {
    setCurrentIndex(event.index);
  };

  return {
    currentIndex,
    totalItems: items.length,
    flickingRef: flickingRef as React.RefObject<Flicking>,
    goToSlide,
    nextSlide,
    prevSlide,
    handleMove,
  };
};

/**
 * Hook for auto-play functionality
 */
export const useCarouselAutoPlay = (
  flickingRef: React.RefObject<Flicking | null>,
  autoPlay: boolean,
  interval: number
) => {
  React.useEffect(() => {
    if (autoPlay && interval > 0) {
      const autoPlayInterval = setInterval(() => {
        if (flickingRef.current) {
          flickingRef.current.next();
        }
      }, interval);

      return () => clearInterval(autoPlayInterval);
    }
  }, [autoPlay, interval, flickingRef]);
};

/**
 * Hook for keyboard navigation
 */
export const useCarouselKeyboard = (
  flickingRef: React.RefObject<Flicking | null>,
  enabled: boolean = true
) => {
  React.useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (!flickingRef.current) return;

      switch (event.key) {
        case "ArrowLeft":
          event.preventDefault();
          flickingRef.current.prev();
          break;
        case "ArrowRight":
          event.preventDefault();
          flickingRef.current.next();
          break;
        case "Home":
          event.preventDefault();
          flickingRef.current.moveTo(0);
          break;
        case "End":
          event.preventDefault();
          flickingRef.current.moveTo(flickingRef.current.panelCount - 1);
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [enabled, flickingRef]);
};

/**
 * Hook for touch/swipe gestures on mobile
 */
export const useCarouselTouch = (
  flickingRef: React.RefObject<Flicking | null>,
  enabled: boolean = true
) => {
  const [touchStart, setTouchStart] = React.useState<number | null>(null);
  const [touchEnd, setTouchEnd] = React.useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: TouchEvent) => {
    if (!enabled) return;
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: TouchEvent) => {
    if (!enabled) return;
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!enabled || !touchStart || !touchEnd || !flickingRef.current) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      flickingRef.current.next();
    } else if (isRightSwipe) {
      flickingRef.current.prev();
    }
  };

  return {
    onTouchStart,
    onTouchMove,
    onTouchEnd,
  };
};
