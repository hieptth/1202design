"use client";

import { useState, useEffect, useRef, useCallback } from "react";

export const useAccordionHeight = (isOpen: boolean) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    if (!contentRef.current) return;

    const updateHeight = () => {
      setHeight(isOpen ? contentRef.current!.scrollHeight : 0);
    };

    updateHeight();

    // Handle dynamic content changes
    const resizeObserver = new ResizeObserver(updateHeight);
    if (isOpen) {
      resizeObserver.observe(contentRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [isOpen]);

  return { contentRef, height };
};

/**
 * Custom hook for managing accordion state
 */
export const useAccordionState = (
  defaultOpenId?: string,
  allowMultiple: boolean = false
) => {
  const [openItems, setOpenItems] = useState<Set<string>>(
    new Set(defaultOpenId ? [defaultOpenId] : [])
  );

  const toggleItem = useCallback(
    (itemId: string) => {
      setOpenItems((prev) => {
        const newOpenItems = new Set(prev);

        if (allowMultiple) {
          if (newOpenItems.has(itemId)) {
            newOpenItems.delete(itemId);
          } else {
            newOpenItems.add(itemId);
          }
        } else {
          if (newOpenItems.has(itemId)) {
            newOpenItems.clear();
          } else {
            newOpenItems.clear();
            newOpenItems.add(itemId);
          }
        }

        return newOpenItems;
      });
    },
    [allowMultiple]
  );

  const isItemOpen = useCallback(
    (itemId: string) => {
      return openItems.has(itemId);
    },
    [openItems]
  );

  return {
    isItemOpen,
    toggleItem,
    openItems: Array.from(openItems),
  };
};
