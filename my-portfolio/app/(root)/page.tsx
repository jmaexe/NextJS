"use client";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Link from "next/link";

export default function Home() {
  return (
    <BackgroundBeamsWithCollision>
      <div className="flex flex-col items-center gap-5">
        <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
          Welcome to{" "}
          <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
            <TextGenerateEffect words="my Portfolio" />
          </div>
        </h2>
        <Link className="p-[3px] relative" href={"home"}>
          <div className="absolute inset-0  bg-gradient-to-r from-indigo-500 to-purple-500  rounded-lg" />
          <div className="px-8 py-2  rounded-[6px]  relative group transition duration-200 text-white hover:bg-black-300">
            More about me
          </div>
        </Link>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
