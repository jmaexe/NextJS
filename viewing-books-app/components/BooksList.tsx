import { Book, getBooks } from "@/types";
import { NextRequest } from "next/server";
import React, { Suspense } from "react";
import BookCard from "./BookCard";

const BooksList = async (filters?: { title?: string }) => {
  const books = await getBooks(filters);
  return (
    <div className="grid grid-cols-1 gap-4 xl:grid-cols-4 lg:grid-cols-3 lg:gap-8 sm:grid-cols-2 justify-center">
      {books.length != 0 ? (
        books.map((book: Book) => <BookCard key={book.title} {...book} />)
      ) : (
        <p>nessun libro presente</p>
      )}
    </div>
  );
};

export default BooksList;
