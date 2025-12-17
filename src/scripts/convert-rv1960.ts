import fs from "fs";
import { XMLParser } from "fast-xml-parser";

const xml = fs.readFileSync(
  "RV1960.xml", // ajustá el nombre si es distinto
  "utf-8"
);

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: "@_",
  trimValues: false,
});

const json = parser.parse(xml);

if (!json.bible || !json.bible.b) {
  throw new Error("Estructura de XML inválida");
}

const books = Array.isArray(json.bible.b)
  ? json.bible.b
  : [json.bible.b];

fs.mkdirSync("src/data/bible/rv1960", { recursive: true });

for (const book of books) {
  const bookName = book["@_n"];

  const chapters = Array.isArray(book.c)
    ? book.c
    : [book.c];

  const result = {
    book: bookName,
    chapters: chapters.map((ch: any) => {
      const verses = Array.isArray(ch.v)
        ? ch.v
        : [ch.v];

      return {
        chapter: Number(ch["@_n"]),
        verses: verses.map((v: any) => ({
          v: Number(v["@_n"]),
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

console.log("✔ Conversión RV1960 completada correctamente");
