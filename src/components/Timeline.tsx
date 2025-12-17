"use client";

import { useEffect, useRef } from "react";
import { DataSet } from "vis-data";
import { Timeline } from "vis-timeline/standalone";
import { timelineEvents } from "@/src/data/timeline-events";
import { dateFromYear } from "@/src/lib/date";
import { formatYearLabel } from "@/src/lib/timeline-format";

export default function TimelineView({
  onSelect,
}: {
  onSelect: (id: string) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const items = new DataSet(
      timelineEvents.map((e) => ({
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

    // Año 0 correctamente
    timeline.addCustomTime(dateFromYear(0), "jesus");
    timeline.setCustomTimeTitle("Nacimiento de Jesús", "jesus");

    // Vista inicial
    timeline.setWindow(
      dateFromYear(-500),
      dateFromYear(500)
    );

    timeline.on("select", (props) => {
      if (props.items.length) {
        onSelect(props.items[0] as string);
      }
    });

    return () => timeline.destroy();
  }, [onSelect]);

  return <div ref={containerRef} className="h-[400px] w-full" />;
}
