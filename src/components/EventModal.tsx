"use client";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { TimelineEvent } from "@/src/data/timeline-events";
import Link from "next/link";
import {getFirstChapter} from '@/src/lib/chapters'

export default function EventModal({
    event,
    onClose,
}: {
    event: TimelineEvent | null;
    onClose: () => void;
}) {
    return (
        <Dialog open={!!event} onOpenChange={(open) => !open && onClose()}>
            <DialogContent className="max-w-lg max-h-[85vh] overflow-y-auto">
                {event && (
                    <>
                        <DialogHeader>
                            <DialogTitle>{event.title}</DialogTitle>
                            <DialogDescription>
                                {event.start}
                                {event.end ? ` – ${event.end}` : ""}
                            </DialogDescription>
                        </DialogHeader>

                        {/* Descripción */}
                        {event.description && (
                            <p className="text-sm leading-relaxed text-slate-700 mt-4">
                                {event.description}
                            </p>
                        )}

                        {/* Libros relacionados */}
                        {event.books && event.books.length > 0 && (
                            <div className="mt-6">
                                <h3 className="text-sm font-medium mb-2">
                                    Libros bíblicos relacionados
                                </h3>
                                <ul className="space-y-2">
  {event.books.map((b) => {
    const chapter = getFirstChapter(b.chapters);

    return (
      <li key={b.book}>
        <Link
          href={`/lectura/${b.book}/${chapter}`}
          className="text-sm text-blue-600 hover:underline"
        >
          {b.book}
          {b.chapters && (
            <span className="text-slate-500"> ({b.chapters})</span>
          )}
        </Link>
      </li>
    );
  })}
</ul>
                            </div>
                        )}
                    </>
                )}
            </DialogContent>
        </Dialog>
    );
}
