import { memo } from "react";
import { ACCORDION_CONSTANTS, ACCORDION_VARIANTS } from "./constants";
import { useAccordionHeight } from "./hooks";
import type { AccordionItemProps } from "./types";

export const AccordionItem = memo<AccordionItemProps>(
  ({
    title,
    children,
    isOpen,
    onToggle,
    className = "",
    variant = "default",
  }) => {
    const { contentRef, height } = useAccordionHeight(isOpen);
    const variantStyles = ACCORDION_VARIANTS[variant];

    return (
      <div className={`${ACCORDION_CONSTANTS.STYLES.BORDER} ${className}`}>
        <button
          onClick={onToggle}
          className={`flex justify-between items-center w-full text-left ${
            ACCORDION_CONSTANTS.STYLES.BUTTON_PADDING.TOP
          } ${
            isOpen
              ? ACCORDION_CONSTANTS.STYLES.BUTTON_PADDING.BOTTOM_OPEN
              : ACCORDION_CONSTANTS.STYLES.BUTTON_PADDING.BOTTOM_CLOSED
          } hover:opacity-80 transition-all duration-${
            ACCORDION_CONSTANTS.ANIMATION.DURATION.FAST
          }`}
          aria-expanded={isOpen}
          aria-controls={`accordion-content-${title
            .replace(/\s+/g, "-")
            .toLowerCase()}`}
          type="button"
        >
          <p className={variantStyles.title}>{title}</p>

          <div className="flex-shrink-0" aria-hidden="true">
            <div
              className={`${ACCORDION_CONSTANTS.STYLES.ICON_SIZE} flex items-center justify-center`}
            >
              <span
                className={`${variantStyles.icon} transition-all duration-${
                  ACCORDION_CONSTANTS.ANIMATION.DURATION.NORMAL
                } ${ACCORDION_CONSTANTS.ANIMATION.EASING} ${
                  isOpen ? "rotate-180" : "rotate-0"
                } transform-gpu`}
              >
                {isOpen ? "−" : "+"}
              </span>
            </div>
          </div>
        </button>

        <div
          className={`overflow-hidden transition-all duration-${ACCORDION_CONSTANTS.ANIMATION.DURATION.SLOW} ${ACCORDION_CONSTANTS.ANIMATION.EASING}`}
          style={{ height: `${height}px` }}
          id={`accordion-content-${title.replace(/\s+/g, "-").toLowerCase()}`}
          role="region"
          aria-labelledby={`accordion-button-${title
            .replace(/\s+/g, "-")
            .toLowerCase()}`}
        >
          <div
            ref={contentRef}
            className={ACCORDION_CONSTANTS.STYLES.CONTENT_PADDING}
          >
            <div
              className={`animate-in fade-in-0 slide-in-from-top-2 duration-${ACCORDION_CONSTANTS.ANIMATION.DURATION.NORMAL}`}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

AccordionItem.displayName = "AccordionItem";
