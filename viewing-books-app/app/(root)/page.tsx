import BooksList from "@/components/BooksList";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <p>Home page</p>
      <Link href={"books"} className="link-info">
        Books{" "}
      </Link>
    </>
  );
}
