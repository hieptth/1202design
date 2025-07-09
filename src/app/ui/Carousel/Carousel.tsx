"use client";

import React from "react";
import Flicking, { ViewportSlot } from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import { CAROUSEL_PRESETS } from "./constants";
import { CarouselProps, CarouselOptions } from "./types";
import { useCarouselAutoPlay, useCarouselKeyboard } from "./hooks";

// Default options
const DEFAULT_OPTIONS: Required<CarouselOptions> = {
  circular: true,
  align: "center",
  moveType: "snap",
  autoResize: true,
  panelsPerView: 1,
  gap: 20,
  duration: 500,
  autoPlay: false,
  autoPlayInterval: 3000,
};

// Control variants
const CONTROL_VARIANTS = {
  default: {
    container: "absolute top-1/2 -translate-y-1/2 z-10",
    button:
      "bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-colors",
    prev: "left-4",
    next: "right-4",
  },
  minimal: {
    container: "absolute top-1/2 -translate-y-1/2 z-10",
    button:
      "bg-black/20 hover:bg-black/40 rounded-full p-1 transition-colors text-white",
    prev: "left-2",
    next: "right-2",
  },
  custom: {
    container: "",
    button: "",
    prev: "",
    next: "",
  },
};

// Indicator variants
const INDICATOR_VARIANTS = {
  dots: {
    container: "flex justify-center space-x-2 mt-4",
    indicator: "w-3 h-3 rounded-full transition-colors",
    active: "bg-blue-500",
    inactive: "bg-gray-300 hover:bg-gray-400",
  },
  lines: {
    container: "flex justify-center space-x-1 mt-4",
    indicator: "w-8 h-1 transition-colors",
    active: "bg-blue-500",
    inactive: "bg-gray-300 hover:bg-gray-400",
  },
  numbers: {
    container: "flex justify-center space-x-1 mt-4",
    indicator:
      "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors",
    active: "bg-blue-500 text-white",
    inactive: "bg-gray-200 text-gray-600 hover:bg-gray-300",
  },
};

export const Carousel: React.FC<CarouselProps> = ({
  items,
  className = "",
  options = {},
  preset,
  showControls = true,
  showIndicators = true,
  controlsVariant = "default",
  indicatorsVariant = "dots",
  onMove,
  onChanged,
  renderCustomControls,
  renderCustomIndicators,
}) => {
  const flickingRef = React.useRef<Flicking>(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  // Merge options with preset if provided
  const presetOptions = preset ? CAROUSEL_PRESETS[preset] : {};
  const mergedOptions = { ...DEFAULT_OPTIONS, ...presetOptions, ...options };

  // Custom hooks
  useCarouselAutoPlay(
    flickingRef,
    mergedOptions.autoPlay,
    mergedOptions.autoPlayInterval
  );
  useCarouselKeyboard(flickingRef, true);

  const handlePrev = () => {
    flickingRef.current?.prev();
  };

  const handleNext = () => {
    flickingRef.current?.next();
  };

  const handleIndicatorClick = (index: number) => {
    flickingRef.current?.moveTo(index);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleMove = (event: any) => {
    setCurrentIndex(event.index);
    onMove?.(event);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChanged = (event: any) => {
    setCurrentIndex(event.index);
    onChanged?.(event);
  };

  const controlStyles = CONTROL_VARIANTS[controlsVariant];
  const indicatorStyles = INDICATOR_VARIANTS[indicatorsVariant];

  return (
    <div className={`relative ${className}`}>
      <Flicking
        ref={flickingRef}
        {...mergedOptions}
        onMove={handleMove}
        onChanged={handleChanged}
        className="carousel-flicking"
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="carousel-panel"
            style={{
              width: `${100 / mergedOptions.panelsPerView}%`,
              flexShrink: 0,
            }}
          >
            {item.content}
          </div>
        ))}

        {showControls && (
          <ViewportSlot>
            {renderCustomControls ? (
              renderCustomControls({
                onPrev: handlePrev,
                onNext: handleNext,
                currentIndex,
                totalItems: items.length,
              })
            ) : (
              <>
                <div
                  className={`${controlStyles.container} ${controlStyles.prev}`}
                >
                  <button
                    onClick={handlePrev}
                    className={controlStyles.button}
                    aria-label="Previous slide"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                  </button>
                </div>

                <div
                  className={`${controlStyles.container} ${controlStyles.next}`}
                >
                  <button
                    onClick={handleNext}
                    className={controlStyles.button}
                    aria-label="Next slide"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </button>
                </div>
              </>
            )}
          </ViewportSlot>
        )}
      </Flicking>

      {showIndicators && (
        <div>
          {renderCustomIndicators ? (
            renderCustomIndicators({
              currentIndex,
              totalItems: items.length,
              onIndicatorClick: handleIndicatorClick,
            })
          ) : (
            <div className={indicatorStyles.container}>
              {items.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleIndicatorClick(index)}
                  className={`${indicatorStyles.indicator} ${
                    index === currentIndex
                      ? indicatorStyles.active
                      : indicatorStyles.inactive
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                >
                  {indicatorsVariant === "numbers" ? index + 1 : ""}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
