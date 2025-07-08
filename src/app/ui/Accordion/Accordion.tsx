"use client";

import { memo } from "react";
import { AccordionItem } from "./AccordionItem";
import { useAccordionState } from "./hooks";
import type { AccordionProps } from "./types";

export const Accordion = memo<AccordionProps>(
  ({
    items,
    defaultOpenId,
    allowMultiple = false,
    className = "",
    variant = "default",
  }) => {
    const { isItemOpen, toggleItem } = useAccordionState(
      defaultOpenId,
      allowMultiple
    );

    if (!items.length) {
      return null;
    }

    return (
      <div
        className={`space-y-0 ${className}`}
        role="tablist"
        aria-multiselectable={allowMultiple}
      >
        {items.map((item) => (
          <AccordionItem
            key={item.id}
            title={item.title}
            isOpen={isItemOpen(item.id)}
            onToggle={() => toggleItem(item.id)}
            variant={variant}
          >
            {item.content}
          </AccordionItem>
        ))}
      </div>
    );
  }
);

Accordion.displayName = "Accordion";
