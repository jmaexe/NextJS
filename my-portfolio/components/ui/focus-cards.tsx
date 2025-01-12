"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-lg relative   overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      <div
        className={cn(
          "absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50  z-30 pointer-events-none transition duration-1000 ",
          hovered !== null && hovered === index ? "to-transparent" : "to-black"
        )}
      />
      <Image
        src={card.image}
        alt={card.title}
        fill
        className="object-cover absolute inset-0"
      />
      {/* <div
        className={cn(
          "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <p className="text-xl md:text-2xl font-medium bg-clip-text text-white">
          {card.title}
        </p>
      </div> */}
    </div>
  )
);

Card.displayName = "Card";

type Card = {
  title: string;
  image: StaticImageData;
};

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
