"use client";
import Link from "next/link";
import React, { useState } from "react";

const FiltersBooks = () => {
  const [title, setTitle] = useState<string>("");
  return (
    <>
      <div className="relative">
        <label
          htmlFor="titleFilter"
          className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 dark:border-gray-700 dark:bg-gray-800"
        >
          <input
            type="text"
            id="titleFilter"
            placeholder="Title"
            className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm dark:text-white"
            onChange={(e) => setTitle(e.target.value)}
          />

          <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs dark:text-gray-200">
            Title to search
          </span>
        </label>

        <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
          <Link
            className="text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            href={`books?title=${title}`}
          >
            <span className="sr-only">Search</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </Link>
        </span>
      </div>
    </>
  );
};

export default FiltersBooks;
