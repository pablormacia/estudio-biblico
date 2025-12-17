"use client";

import { useEffect, useRef } from "react";
import { DataSet } from "vis-data";
import { Timeline } from "vis-timeline/standalone";
import { dateFromYear } from "@/src/lib/date";
import { formatYearLabel } from "@/src/lib/timeline-format";
import { TimelineEvent } from "@/src/data/timeline-events";

export default function TimelineView({
  events,
  zoomRange,
  onSelect,
}: {
  events: TimelineEvent[];
  zoomRange: { start: number; end: number } | null;
  onSelect: (id: string) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<Timeline | null>(null);

  useEffect(() => {
    if (!containerRef.current || !events) return;

    // limpieza total
    if (timelineRef.current) {
      timelineRef.current.destroy();
      timelineRef.current = null;
    }
    containerRef.current.innerHTML = "";

    const items = new DataSet(
      events.map((e) => ({
        id: e.id,
        content: e.title,
        start: dateFromYear(e.start),
        end: e.end ? dateFromYear(e.end) : undefined,
        group: e.level,
      }))
    );

    const timeline = new Timeline(containerRef.current, items, {
      zoomable: true,
      stack: true,
      horizontalScroll: true,
      showMajorLabels: true,
      showMinorLabels: true,
      format: {
        majorLabels: formatYearLabel,
        minorLabels: formatYearLabel,
      },
    });

    timelineRef.current = timeline;

    // 🔍 ZOOM AUTOMÁTICO
    if (zoomRange) {
      timeline.setWindow(
        dateFromYear(zoomRange.start),
        dateFromYear(zoomRange.end),
        { animation: { duration: 400, easingFunction: "easeInOutQuad" } }
      );
    }

    timeline.on("select", (props) => {
      if (props.items.length) {
        onSelect(props.items[0] as string);
      }
    });

    return () => {
      timeline.destroy();
      timelineRef.current = null;
    };
  }, [events, zoomRange, onSelect]);

  return <div ref={containerRef} className="h-[420px] w-full" />;
}
