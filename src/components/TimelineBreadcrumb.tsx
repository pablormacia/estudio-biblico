"use client";

import { TimelineEvent } from "@/src/data/timeline-events";

export default function TimelineBreadcrumb({
  event,
  getParent,
  onNavigate,
}: {
  event: TimelineEvent | null;
  getParent: (id: string) => TimelineEvent | null;
  onNavigate: (event: TimelineEvent) => void;
}) {
  if (!event) return null;

  const parent =
    event.parentId ? getParent(event.parentId) : null;

  return (
    <nav className="mb-4 text-sm text-slate-600">
      <ol className="flex items-center gap-2 flex-wrap">
        {parent && (
          <>
            <li>
              <button
                onClick={() => onNavigate(parent)}
                className="hover:underline text-blue-600"
              >
                {parent.title}
              </button>
            </li>
            <li className="text-slate-400">→</li>
          </>
        )}

        <li className="font-semibold text-slate-900">
          {event.title}
        </li>
      </ol>
    </nav>
  );
}
