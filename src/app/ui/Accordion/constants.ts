export const ACCORDION_CONSTANTS = {
  ANIMATION: {
    DURATION: {
      FAST: 200,
      NORMAL: 300,
      SLOW: 500,
    },
    EASING: "ease-in-out",
  },
  STYLES: {
    BUTTON_PADDING: {
      TOP: "pt-8",
      BOTTOM_CLOSED: "pb-8",
      BOTTOM_OPEN: "pb-4",
    },
    CONTENT_PADDING: "pb-8 pr-8",
    BORDER: "border-b border-[#D6D6D6]",
    ICON_SIZE: "w-8 h-8",
  },
} as const;

export const ACCORDION_VARIANTS = {
  default: {
    title:
      "text-xl md:text-2xl/8 font-medium text-[#0C0C0C] tracking-tight pr-6",
    content: "text-gray-600 text-lg leading-relaxed",
    icon: "text-4xl font-extralight text-gray-700 leading-none",
  },
  minimal: {
    title: "text-xl md:text-2xl font-medium text-gray-800 pr-4",
    content: "text-gray-600 text-base leading-relaxed",
    icon: "text-2xl font-light text-gray-600 leading-none",
  },
} as const;
