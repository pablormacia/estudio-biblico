import { notFound } from "next/navigation";
import { bibleRv1960 } from "@/src/data/bible/rv1960";

type PageProps = {
  params: Promise<{
    libro: string;
    capitulo: string;
  }>;
};

export default async function CapituloPage({ params }: PageProps) {
  const { libro, capitulo } = await params;

  const book = bibleRv1960[libro];
  if (!book) return notFound();

  const chapterNumber = Number(capitulo);
  if (Number.isNaN(chapterNumber)) return notFound();

  const chapter = book.chapters.find(
    (c: { chapter: number }) => c.chapter === chapterNumber
  );
  if (!chapter) return notFound();

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-xl font-semibold mb-6">
        {book.book} {chapterNumber}
      </h1>

      <div className="space-y-3 leading-relaxed">
        {chapter.verses.map(
          (v: { v: number; text: string }) => (
            <p key={v.v}>
              <span className="text-xs text-slate-400 mr-2">
                {v.v}
              </span>
              {v.text}
            </p>
          )
        )}
      </div>
    </main>
  );
}
