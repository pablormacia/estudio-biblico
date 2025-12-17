export function getFirstChapter(chapters?: string): string {
  if (!chapters) return "1";

  if (chapters.includes("–")) {
    return chapters.split("–")[0];
  }

  if (chapters.includes(",")) {
    return chapters.split(",")[0].trim();
  }

  return chapters;
}
