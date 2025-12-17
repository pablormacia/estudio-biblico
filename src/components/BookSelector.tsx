"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { BOOKS_INDEX } from "@/src/data/books-index";

export default function BookSelector({
  value,
  onChange,
}: {
  value: string;
  onChange: (bookId: string) => void;
}) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[260px]">
        <SelectValue placeholder="Elegí un libro" />
      </SelectTrigger>
      <SelectContent>
        {BOOKS_INDEX.map((book) => (
          <SelectItem key={book.id} value={book.id}>
            {book.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
