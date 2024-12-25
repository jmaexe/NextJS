import Link from "next/link";

export default function Home() {
  // throw new Error("something went wrong")
  return (
    <>
      <h1>home page</h1>
      <Link href={'users'}>users</Link>

    </>
  );
}
