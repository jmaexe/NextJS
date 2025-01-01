import { Book, getBookById, getBooks } from "@/types";
import Image from "next/image";
import Link from "next/link";
import ErrorBookNotFound from "./error";
const BookDetails = async ({ params }: { params: { id: string } }) => {
  const idParams = (await params).id;
  const book = await getBookById(idParams);
  if (!book) return <ErrorBookNotFound />;
  const { chapters, coverImageUrl, id, summary, title } = book;
  return (
    <div className="grid place-items-center h-screen ">
      <article className="rounded-xl border border-gray-700 bg-gray-800 p-4 max-w-3xl">
        <div className="flex items-center justify-between ">
          <div className="flex items-center gap-4">
            <Image
              alt=""
              src={coverImageUrl}
              className="size-16 rounded-full object-cover"
              width={20}
              height={20}
            />

            <div>
              <h3 className="text-lg font-medium text-white">{title}</h3>

              <div className="flow-root">
                <ul className="-m-1 flex flex-wrap">
                  {/* list di genere */}
                  <li className="p-1 leading-none">
                    <a
                      href="#"
                      className="text-xs font-medium text-gray-300"
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <Link
            href={"/"}
            className="text-gray-700 underline dark:text-gray-200 pr-2  "
          >
            Go Back
          </Link>
        </div>
        <ul className="mt-4 space-y-2">
          {chapters.map((chapter) => (
            <li key={chapter.text}>
              <Link
                href="#"
                className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600"
              >
                <strong className="font-medium text-white">
                  {chapter.title}
                </strong>

                <p className="mt-1 text-xs font-medium text-gray-300 text-pretty text-justify">
                  {chapter.text}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
};

export default BookDetails;
