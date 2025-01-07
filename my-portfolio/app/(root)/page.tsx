"use client";
import { CardsCarouselDemo } from "@/components/CardsCarouselDemo";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Meteors } from "@/components/ui/meteors";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Timeline } from "@/components/ui/timeline";
import database_foto from "@/public/database_animali.png";
import lista_foto from "@/public/lista.png";
import registra_foto from "@/public/registra.png";
import { motion } from "motion/react";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <BackgroundBeamsWithCollision>
        <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
          Welcome to{" "}
          <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
            <TextGenerateEffect words="my Portfolio" />
          </div>
        </h2>
      </BackgroundBeamsWithCollision>
      {/* <>
        {" "}
        <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
          <TextGenerateEffect
            words="Welcome to my Portfolio!"
            className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20"
          />
        </div>
      </> */}
      <Timeline
        title="La mia carriera scolastica"
        description="Gli argomenti principali di informatica affrontati: "
        data={[
          {
            title: "2021-2022",
            content: <CardsCarouselDemo />,
          },
          {
            title: "2022-2023",
            content: <div>ciao</div>,
          },
          {
            title: "2023-2024",
            content: <div>ciao</div>,
          },
          {
            title: "2024",
            content: (
              <div>
                <p className="text-black dark:text-white text-xs md:text-sm font-normal mb-8">
                  Le basi di PHP & MySQL
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <Image
                    src={lista_foto}
                    alt="startup template"
                    width={500}
                    height={500}
                    className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />{" "}
                  <Image
                    src={database_foto}
                    alt="startup template"
                    width={500}
                    height={500}
                    className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                  <Image
                    src={registra_foto}
                    alt="startup template"
                    width={500}
                    height={500}
                    className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                </div>
              </div>
            ),
          },
        ]}
      />
    </>
  );
}
