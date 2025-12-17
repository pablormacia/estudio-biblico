"use client";

import { useEffect, useState } from "react";
import BookSelector from "@/src/components/BookSelector";
import BibleReader, {
  BibleBook,
} from "@/src/components/BibleReader";

export default function LecturaPage() {
  const [bookId, setBookId] = useState("genesis");
  const [book, setBook] = useState<BibleBook | null>(null);

  useEffect(() => {
    async function loadBook() {
      const data = await import(
        `@/src/data/bible/rv1960/${bookId}.json`
      );
      setBook(data.default);
    }

    loadBook();
  }, [bookId]);

  return (
    <main className="min-h-screen bg-slate-50 p-6">
      <header className="mb-6 flex flex-col gap-4">
        <h1 className="text-2xl font-semibold">
          Lectura bíblica — RV1960
        </h1>

        <BookSelector value={bookId} onChange={setBookId} />
      </header>

      {book ? (
        <BibleReader book={book} />
      ) : (
        <p className="text-slate-500">Cargando libro…</p>
      )}
    </main>
  );
}
