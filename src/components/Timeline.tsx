"use client";

import { useEffect, useRef } from "react";
import { DataSet } from "vis-data";
import { Timeline } from "vis-timeline/standalone";
import { dateFromYear } from "@/src/lib/date";
import { TimelineEvent } from "@/src/data/timeline-events";

export default function TimelineView({
  events,
  onSelect,
}: {
  events: TimelineEvent[];
  onSelect: (id: string) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

 const EVENT_COLORS = ["tl-color-1", "tl-color-2", "tl-color-3", "tl-color-4", "tl-color-5"] as const;

  useEffect(() => {
    if (!containerRef.current) return;

    
const items = new DataSet(
  events.map((e, index) => {
    const colorClass = EVENT_COLORS[index % EVENT_COLORS.length];

    return {
      id: e.id,
      content: `<span class="tl-title">${e.title}</span>`,
      start: dateFromYear(e.start),
      end: e.end ? dateFromYear(e.end) : dateFromYear(e.start + 1),
      type: "box",
      className: colorClass,
    };
  })
);

    const timeline = new Timeline(containerRef.current, items, {
      zoomable: true,
      moveable: true,
      stack: true,
      horizontalScroll: true,
      selectable: true,
      showCurrentTime: false,
      margin: {
        item: 12,
        axis: 10,
      },
    });

    timeline.on("select", (props) => {
      if (props.items.length) {
        onSelect(props.items[0] as string);
      }
    });

    return () => {
      timeline.destroy();
    };
  }, [events, onSelect]);

  return <div ref={containerRef} className="h-[400px] w-full" />;
}
