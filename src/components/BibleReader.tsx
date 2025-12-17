import { normalizeVerseText } from "@/src/lib/text";

export type Verse = {
    v: number;
    text: string;
};

export type Chapter = {
    chapter: number;
    verses: Verse[];
};

export type BibleBook = {
    book: string;
    chapters: Chapter[];
};

export default function BibleReader({ book }: { book: BibleBook }) {
    return (
        <div className="space-y-8">
            {book.chapters.map((ch) => (
                <section key={ch.chapter}>
                    <h2 className="text-xl font-semibold mb-3">
                        Capítulo {ch.chapter}
                    </h2>

                    <div className="space-y-1 leading-relaxed">
                        {ch.verses.map((v) => (
                            <p key={v.v}>
                                <sup className="text-xs text-slate-500 mr-1">
                                    {v.v}
                                </sup>
                                {normalizeVerseText(v.text)}
                            </p>
                        ))}
                    </div>
                </section>
            ))}
        </div>
    );
}
