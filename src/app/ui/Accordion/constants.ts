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
    BUTTON_PADDING: "py-8",
    CONTENT_PADDING: "pb-8 pr-12",
    BORDER: "border-b border-gray-300",
    ICON_SIZE: "w-8 h-8",
  },
} as const;

export const ACCORDION_VARIANTS = {
  default: {
    title: "text-3xl md:text-4xl font-light text-gray-900 tracking-tight pr-6",
    content: "text-gray-600 text-lg leading-relaxed max-w-lg",
    icon: "text-4xl font-extralight text-gray-700 leading-none",
  },
  minimal: {
    title: "text-xl md:text-2xl font-medium text-gray-800 pr-4",
    content: "text-gray-600 text-base leading-relaxed",
    icon: "text-2xl font-light text-gray-600 leading-none",
  },
} as const;
