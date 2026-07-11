"use client";

import Image from "next/image";
import { useState } from "react";
import ServiceIcon from "@/components/ServiceIcon";
import type { IconName } from "@/content/types";

export interface MissionTab {
  key: string;
  label: string;
  icon: IconName;
  image: { src: string; alt: string };
  heading: string;
  text: string;
  items?: { title: string; text: string }[];
}

export default function MissionTabs({ tabs }: { tabs: MissionTab[] }) {
  const [active, setActive] = useState(0);
  const tab = tabs[active];

  return (
    <div>
      <div className="flex justify-center gap-4 sm:gap-6">
        {tabs.map((t, i) => {
          const isActive = i === active;
          return (
            <button
              key={t.key}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={isActive}
              className={`flex h-24 w-24 flex-col items-center justify-center gap-2 rounded-card transition-colors duration-300 sm:h-32 sm:w-32 ${
                isActive ? "bg-orange" : "bg-navy hover:bg-navy/85"
              }`}
            >
              <ServiceIcon icon={t.icon} className="h-8 w-8 text-white" />
              <span className="text-sm font-semibold text-white">
                {t.label}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-10 rounded-card border border-form-border bg-white p-6 shadow-card sm:p-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
          <div className="relative aspect-4/3 overflow-hidden rounded-card">
            <Image
              src={tab.image.src}
              alt={tab.image.alt}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3>{tab.heading}</h3>
            <p className="mt-4 text-muted">{tab.text}</p>
            {tab.items && (
              <ul className="mt-4 space-y-2 text-sm">
                {tab.items.map((item) => (
                  <li key={item.title}>
                    <span className="font-semibold text-heading">
                      {item.title}:
                    </span>{" "}
                    <span className="text-muted">{item.text}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
