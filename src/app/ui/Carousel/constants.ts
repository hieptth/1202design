// Carousel constants and variants
export const CAROUSEL_CONSTANTS = {
  DEFAULT_DURATION: 500,
  DEFAULT_GAP: 20,
  DEFAULT_PANELS_PER_VIEW: 1,
  DEFAULT_AUTOPLAY_INTERVAL: 3000,
} as const;

export const CAROUSEL_VARIANTS = {
  controls: {
    default: "default",
    minimal: "minimal",
    custom: "custom",
  },
  indicators: {
    dots: "dots",
    lines: "lines",
    numbers: "numbers",
  },
  alignment: {
    prev: "prev",
    center: "center",
    next: "next",
  },
  moveType: {
    snap: "snap",
    freeScroll: "freeScroll",
  },
} as const;

export const CAROUSEL_PRESETS = {
  // Basic single item carousel
  basic: {
    circular: true,
    align: "center" as const,
    moveType: "snap" as const,
    panelsPerView: 1,
    gap: 20,
    duration: 500,
  },

  // Multi-item card carousel
  cards: {
    circular: true,
    align: "prev" as const,
    moveType: "snap" as const,
    panelsPerView: 3,
    gap: 20,
    duration: 500,
  },

  // Hero/banner carousel with auto-play
  hero: {
    circular: true,
    align: "center" as const,
    moveType: "snap" as const,
    panelsPerView: 1,
    gap: 0,
    duration: 600,
    autoPlay: true,
    autoPlayInterval: 4000,
  },

  // Mobile-friendly carousel
  mobile: {
    circular: true,
    align: "center" as const,
    moveType: "snap" as const,
    panelsPerView: 1.2,
    gap: 15,
    duration: 300,
  },

  // Free scroll gallery
  gallery: {
    circular: false,
    align: "prev" as const,
    moveType: "freeScroll" as const,
    panelsPerView: 2.5,
    gap: 15,
    duration: 300,
  },
} as const;

export type CarouselPreset = keyof typeof CAROUSEL_PRESETS;
