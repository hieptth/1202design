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
          className={`flex justify-between items-center w-full text-left ${ACCORDION_CONSTANTS.STYLES.BUTTON_PADDING} hover:opacity-80 transition-opacity duration-${ACCORDION_CONSTANTS.ANIMATION.DURATION.FAST}`}
          aria-expanded={isOpen}
          aria-controls={`accordion-content-${title
            .replace(/\s+/g, "-")
            .toLowerCase()}`}
          type="button"
        >
          <h3 className={variantStyles.title}>{title}</h3>

          <div className="flex-shrink-0" aria-hidden="true">
            <div
              className={`${ACCORDION_CONSTANTS.STYLES.ICON_SIZE} flex items-center justify-center`}
            >
              <span
                className={`${
                  variantStyles.icon
                } transition-transform duration-${
                  ACCORDION_CONSTANTS.ANIMATION.DURATION.NORMAL
                } ${ACCORDION_CONSTANTS.ANIMATION.EASING} ${
                  isOpen ? "rotate-45" : "rotate-0"
                }`}
              >
                +
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
