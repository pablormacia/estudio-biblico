"use client";

import { useState, useCallback } from "react";
import TimelineView from "@/src/components/Timeline";
import EventDetailsPanel from "@/src/components/EventDetailsPanel";
import { timelineEvents, TimelineEvent } from "@/src/data/timeline-events";
import TimelineBreadcrumb from "@/src/components/TimelineBreadcrumb";

export default function TimelinePage() {
    const [activeParent, setActiveParent] = useState<string | null>(null);
    const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);
    const [zoomRange, setZoomRange] = useState<{ start: number; end: number } | null>(null);

    const getEventById = (id: string) =>
        timelineEvents.find((e) => e.id === id) || null;

    const navigateToEvent = (event: TimelineEvent) => {
        setSelectedEvent(event);

        if (event.level === 1) {
            const start = event.start;
            const end = event.end ?? event.start;
            const span = Math.max(50, Math.abs(end - start));
            const pad = Math.round(span * 0.15);

            setZoomRange({
                start: start - pad,
                end: end + pad,
            });

            setActiveParent(event.id);
        }
    };


    const visibleEvents: TimelineEvent[] = activeParent
        ? timelineEvents.filter(
            (e) => e.level === 2 && e.parentId === activeParent
        )
        : timelineEvents.filter((e) => e.level === 1);

    const handleSelect = useCallback((id: string) => {
        const event = timelineEvents.find((e) => e.id === id);
        if (!event) return;

        setSelectedEvent(event);

        if (event.level === 1) {
            const start = event.start;
            const end = event.end ?? event.start;
            const span = Math.max(50, Math.abs(end - start));
            const pad = Math.round(span * 0.15);

            setZoomRange({
                start: start - pad,
                end: end + pad,
            });

            setActiveParent(event.id);
        }
    }, []);

    return (
        <main className="flex flex-col md:flex-row h-full">
            <section className="flex-1 p-6">
                {activeParent && (
                    <button
                        onClick={() => {
                            setActiveParent(null);
                            setZoomRange(null);
                            setSelectedEvent(null);
                        }}
                        className="mb-4 text-sm text-blue-600 underline"
                    >
                        ← Volver a vista general
                    </button>
                )}

                <TimelineView
                    events={visibleEvents}
                    zoomRange={zoomRange}
                    onSelect={handleSelect}
                />
                            <TimelineBreadcrumb
  event={selectedEvent}
  getParent={getEventById}
  onNavigate={navigateToEvent}
/>

            </section>


            <EventDetailsPanel
                event={selectedEvent}
                onClose={() => setSelectedEvent(null)}
            />
        </main>
    );
}
