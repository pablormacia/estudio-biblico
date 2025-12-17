export type BibleBook = {
  book: string;
  chapters: {
    chapter: number;
    verses: {
      v: number;
      text: string;
    }[];
  }[];
};
