export function getFirstChapter(chapters?: string) {
  if (!chapters) return "1";

  // "1–3", "5-7", "10"
  const match = chapters.match(/\d+/);
  return match ? match[0] : "1";
}