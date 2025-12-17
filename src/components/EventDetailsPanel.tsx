"use client";

import Link from "next/link";
import { TimelineEvent } from "@/src/data/timeline-events";
import { getFirstChapter } from "@/lib/chapters";

export default function EventDetailsPanel({
  event,
  onClose,
}: {
  event: TimelineEvent | null;
  onClose: () => void;
}) {
  if (!event) return null;

  return (
    <aside className="w-full md:w-80 border-l bg-white p-4 space-y-4">
      <div className="flex items-start justify-between">
        <h2 className="text-lg font-semibold leading-tight">
          {event.title}
        </h2>

        <button
          onClick={onClose}
          className="text-sm text-slate-500 hover:text-slate-800"
        >
          ✕
        </button>
      </div>

      {event.description && (
        <p className="text-sm text-slate-700 leading-relaxed">
          {event.description}
        </p>
      )}

      <div>
        <h3 className="text-sm font-semibold mb-2">
          Libros relacionados
        </h3>

        <ul className="space-y-1 text-sm">
          {event.books.map((b, i) => {
            const chapter = getFirstChapter(b.chapters);

            return (
              <li key={i}>
                <Link
                  href={`/lectura/${b.book}/${chapter}`}
                  className="text-blue-600 hover:underline"
                >
                  {b.book}
                  {b.chapters ? ` (${b.chapters})` : ""}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
