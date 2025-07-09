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
      TOP: "pt-4 lg:pt-8",
      BOTTOM_CLOSED: "pb-4 lg:pb-8",
      BOTTOM_OPEN: "pb-2 lg:pb-4",
    },
    CONTENT_PADDING: "pb-4 lg:pb-8 pr-6",
    BORDER: "border-b border-[#D6D6D6]",
    ICON_SIZE: "w-8 h-8",
  },
} as const;

export const ACCORDION_VARIANTS = {
  default: {
    title:
      "text-lg lg:text-display-xs font-medium text-gray-950 tracking-tight pr-6",
    content: "text-gray-600 text-sm lg:text-lg leading-relaxed",
    icon: "text-4xl font-extralight text-gray-700 leading-none",
  },
  minimal: {
    title: "text-lg lg:text-display-xs font-medium text-gray-800 pr-4",
    content: "text-gray-600 text-sm lg:text-lg leading-relaxed",
    icon: "text-2xl font-light text-gray-600 leading-none",
  },
} as const;
