"use client";
import { c_logo, cpp_logo, java_logo } from "@/public/index";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./ui/wobble-card";
export function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full max-h-fit">
      {data.map((content) => (
        <WobbleCard
          containerClassName="col-span-1 max-h-[400px]"
          key={content.title}
        >
          <Image
            className="absolute inset-0 w-full h-full scale-[1.2] transform opacity-10 "
            src={content.image}
            alt={""}
          />
          <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            {content.title}
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            {content.description}
          </p>
        </WobbleCard>
      ))}
    </div>
  );
}
const data = [
  {
    title: "Gippity AI powers the entire universe",
    description:
      "With over 100,000 mothly active bot users, Gippity AI is the most popular AI platform for developers.",
    image: c_logo,
  },
  {
    title: "No shirt, no shoes, no weapons.",
    description:
      "If someone yells “stop!”, goes limp, or taps out, the fight is over.",
    image: cpp_logo,
  },
  {
    title:
      "Signup for blazing-fast cutting-edge state of the art Gippity AI wrapper today!",
    description:
      "With over 100,000 mothly active bot users, Gippity AI is the most popular AI platform for developers.",
    image: java_logo,
  },
];
