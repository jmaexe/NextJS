import { Book } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const BookCard = ({ title, summary, coverImageUrl, id }: Book) => {
  return (
    <div className="overflow-hidden rounded-lg shadow transition hover:shadow-lg dark:shadow-gray-700/25">
      <div className="bg-white p-4 sm:p-6 dark:bg-gray-900">
        <Link href={`books/${id}`}>
          <Image
            alt=""
            src={coverImageUrl}
            className="h-64 w-full object-cover sm:h-80 lg:h-96"
            width={120}
            height={100}
          />
        </Link>
        <h3 className="mt-0.5 text-lg text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
          {summary}
        </p>
      </div>
    </div>
  );
};

export default BookCard;
