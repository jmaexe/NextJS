"use client";
import { Card, Carousel } from "@/components/ui/cards-carousel";
import c_logo from "@/public/c_logo.png";
import cpp_logo from "@/public/cpp_logo.png";
import java_logo from "@/public/java_logo.png";
import Image from "next/image";
import React from "react";
export function CardsCarouselDemo() {
  const cards = subjects.map((subject, index) => (
    <Card key={index} card={subject} index={index} />
  ));

  return <Carousel items={cards} />;
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-black-950 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-black-300 dark:text-white  md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-black-300 dark:text-white">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const subjects = [
  {
    category: "",
    title: "C",
    src: c_logo,
    content: <DummyContent />,
  },
  {
    category: "",
    title: "C++",
    src: cpp_logo,
    content: <DummyContent />,
  },
  {
    category: "",
    title: "Java",
    src: java_logo,
    content: <DummyContent />,
  },
];
