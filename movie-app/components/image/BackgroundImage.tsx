import { BackdropSize, getBackdropURL } from "@/api/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";
export default function BackgroundImage({
  id,
  path,
  size,
}: {
  id: number;
  path: string;
  size: BackdropSize;
}) {
  return (
    <div className="absolute left-0 top-0 right-0 bottom-0 object-cover bg-cover ">
      <Link href={`/movies/${id}`}>
        <Image
          src={getBackdropURL(size, path)}
          alt="img"
          fill
          // style={{ filter: "blur(5px)", opacity: 0.8 }}
          className={`blur hover:blur-0  opacity-50 hover:cursor-pointer `}
        />
      </Link>
    </div>
  );
}
