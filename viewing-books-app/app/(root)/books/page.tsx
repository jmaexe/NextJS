import BooksList from "@/components/BooksList";
import FiltersBooks from "@/components/FiltersBooks";
import React from "react";

const BooksPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ title?: string }>;
}) => {
  const params = await searchParams;
  return (
    <div className="flex justify-center align-items-center flex-col gap-8 m-4">
      <div className="flex flex-wrap justify-center align-items-center gap-4 p-5">
        <FiltersBooks />
      </div>
      <BooksList {...params} />
    </div>
  );
};

export default BooksPage;
