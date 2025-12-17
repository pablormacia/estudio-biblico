import genesis from "./genesis.json";
import exodo from "./exodo.json";

import { BibleBook } from "@/src/types/bible";

export const bibleRv1960: Record<string, BibleBook> = {
  genesis: genesis as BibleBook,
  exodo: exodo as BibleBook,
};