"use client";

import { useEffect, useRef } from "react";
import { DataSet } from "vis-data";
import { Timeline } from "vis-timeline/standalone";
import { timelineEvents } from "@/src/data/timeline-events";

export default function TimelineView({ onSelect }: { onSelect: (id: string) => void }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const items = new DataSet(
      timelineEvents.map(e => ({
        id: e.id,
        content: e.title,
        start: new Date(e.start, 0, 1),
        end: e.end ? new Date(e.end, 0, 1) : undefined,
        group: e.level
      }))
    );

    const timeline = new Timeline(containerRef.current, items, {
      zoomable: true,
      stack: true,
      horizontalScroll: true,
      showMajorLabels: true,
      showMinorLabels: true
    });

    timeline.on("select", props => {
      if (props.items.length) {
        onSelect(props.items[0]);
      }
    });

    return () => timeline.destroy();
  }, [onSelect]);

  return <div ref={containerRef} className="h-[400px] w-full" />;
}
