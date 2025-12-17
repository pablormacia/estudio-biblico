"use client";

import { useState } from "react";
import TimelineView from "@/src/components/Timeline";
import { timelineEvents, TimelineEvent } from "@/src/data/timeline-events";
import EventModal from "@/src/components/EventModal";

export default function TimelinePage() {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);

  const handleSelect = (id: string) => {
    const event = timelineEvents.find((e) => e.id === id) || null;
    setSelectedEvent(event);
  };

  return (
    <main className="p-6">
      <TimelineView events={timelineEvents} onSelect={handleSelect} />

      <EventModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </main>
  );
}
