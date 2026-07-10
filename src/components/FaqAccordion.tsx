"use client";

import { useState } from "react";

export interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      {items.map((item, i) => {
        const isOpen = i === open;
        return (
          <div
            key={item.question}
            className="overflow-hidden rounded-card border border-form-border"
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
            >
              <span className="font-heading font-semibold text-heading">
                {item.question}
              </span>
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange text-white transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-5 text-sm text-muted">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
