import fs from "fs";
import { XMLParser } from "fast-xml-parser";

const xml = fs.readFileSync(
  "SF_2009-01-22_SPA_BIBLE_SPARV.xml", 
  "utf-8"
);

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: "",
  trimValues: false,
});

const json = parser.parse(xml);

const bible = json.XMLBIBLE;

if (!bible || !bible.BIBLEBOOK) {
  throw new Error("No se encontraron libros en el XML Zefania");
}

fs.mkdirSync("src/data/bible/rv1960", { recursive: true });

const books = Array.isArray(bible.BIBLEBOOK)
  ? bible.BIBLEBOOK
  : [bible.BIBLEBOOK];

for (const book of books) {
  const bookName = book.bname;
  const shortName = book.bsname;
  const bookNumber = Number(book.bnumber);

  const chapters = Array.isArray(book.CHAPTER)
    ? book.CHAPTER
    : [book.CHAPTER];

  const result = {
    bookNumber,
    book: bookName,
    abbrev: shortName,
    chapters: chapters.map((ch: any) => {
      const verses = Array.isArray(ch.VERS)
        ? ch.VERS
        : [ch.VERS];

      return {
        chapter: Number(ch.cnumber),
        verses: verses.map((v: any) => ({
          v: Number(v.vnumber),
          text: typeof v === "string" ? v : v["#text"],
        })),
      };
    }),
  };

  const fileName = bookName
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "_");

  fs.writeFileSync(
    `src/data/bible/rv1960/${fileName}.json`,
    JSON.stringify(result, null, 2),
    "utf-8"
  );
}

console.log("✔ Conversión Zefania RV completada correctamente");
