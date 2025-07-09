import { CAROUSEL_VARIANTS, CAROUSEL_PRESETS } from "./constants";
import Flicking from "@egjs/react-flicking";

export interface CarouselItem {
  id: string | number;
  content: React.ReactNode;
}

export interface CarouselOptions {
  circular?: boolean;
  align?: "prev" | "center" | "next";
  moveType?: "snap" | "freeScroll";
  autoResize?: boolean;
  panelsPerView?: number;
  gap?: number;
  duration?: number;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export interface CarouselControlsProps {
  onPrev: () => void;
  onNext: () => void;
  currentIndex: number;
  totalItems: number;
}

export interface CarouselIndicatorsProps {
  currentIndex: number;
  totalItems: number;
  onIndicatorClick: (index: number) => void;
}

export interface CarouselProps {
  items: CarouselItem[];
  className?: string;
  options?: CarouselOptions;
  preset?: keyof typeof CAROUSEL_PRESETS;
  showControls?: boolean;
  showIndicators?: boolean;
  controlsVariant?: keyof typeof CAROUSEL_VARIANTS.controls;
  indicatorsVariant?: keyof typeof CAROUSEL_VARIANTS.indicators;
  onMove?: (event: { index: number }) => void;
  onChanged?: (event: { index: number }) => void;
  renderCustomControls?: (props: CarouselControlsProps) => React.ReactNode;
  renderCustomIndicators?: (props: CarouselIndicatorsProps) => React.ReactNode;
}

export interface CarouselHookReturn {
  currentIndex: number;
  totalItems: number;
  flickingRef: React.RefObject<Flicking>;
  goToSlide: (index: number) => void;
  nextSlide: () => void;
  prevSlide: () => void;
  handleMove: (event: { index: number }) => void;
}

export type CarouselVariant = keyof typeof CAROUSEL_VARIANTS.controls;
export type CarouselIndicatorVariant =
  keyof typeof CAROUSEL_VARIANTS.indicators;
export type CarouselPreset = keyof typeof CAROUSEL_PRESETS;
