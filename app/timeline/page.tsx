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
            <div className=" mb-3">
                <div className="rounded-lg bg-blue-50 border border-blue-200 px-3 py-2 text-xs text-blue-700">
                    ↔ Deslizá lateralmente para recorrer el tiempo.
                    <br />
                    👆 Tocá un evento para ver más detalles.
                </div>
            </div>
            <TimelineView events={timelineEvents} onSelect={handleSelect} />

            <EventModal
                event={selectedEvent}
                onClose={() => setSelectedEvent(null)}
            />
        </main>
    );
}
