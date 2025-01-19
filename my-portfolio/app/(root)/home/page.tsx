import { FocusCardsDemo } from "@/components/FocusCardsDemo";
import { AnimatedCards } from "@/components/ui/animated-cards";
import { LayoutGrid } from "@/components/ui/layout-grid";
import { Timeline } from "@/components/ui/timeline";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import {
  css_logo,
  database_animali,
  html_logo,
  js_logo,
  lista,
  registra,
} from "@/public";
import Image from "next/image";
import React from "react";
const Page = () => {
  return (
    <div className="w-full h-full bg-black-300">
      <Timeline
        title="La mia carriera scolastica"
        description="Gli argomenti principali di informatica affrontati: "
        data={[
          {
            title: "Programmazione Web",
            content: (
              <div className="flex justify-end">
                <div className="w-5/6">
                  <AnimatedCards
                    contents={[
                      {
                        title: "HTML",
                        description: "HTML Basics",
                        src: html_logo,
                      },
                      {
                        title: "CSS",
                        description: "CSS styles",
                        src: css_logo,
                      },
                      {
                        title: "JS",
                        description: "JS Basics",
                        src: js_logo,
                      },
                    ]}
                  />
                </div>
              </div>
            ),
          },
          {
            title: "Basi della programmazione",
            content: (
              <div className="py-10 px-5">
                <FocusCardsDemo />
              </div>
            ),
          },
          {
            title: "2023-2024",
            content: (
              <div className="h-[500px]  w-full">
                <LayoutGrid
                  cards={[
                    {
                      id: 1,
                      content: (
                        <div>
                          <p className="font-bold md:text-4xl text-xl text-black">
                            Basi di PHP
                          </p>
                          <p className="font-normal text-base text-white"></p>
                          <p className="font-normal text-base my-4 max-w-lg text-neutral-200"></p>
                        </div>
                      ),
                      thumbnail: lista,
                      className: "",
                    },

                    {
                      id: 3,
                      content: (
                        <div>
                          <p className="font-bold md:text-4xl text-xl text-black">
                            Basi di MySQL con MariaDB
                          </p>
                          <p className="font-normal text-base text-white"></p>
                          <p className="font-normal text-base my-4 max-w-lg text-neutral-200"></p>
                        </div>
                      ),
                      thumbnail: database_animali,
                      className: "",
                    },
                  ]}
                />
              </div>
            ),
          },
        ]}
      />
      <div className="flex justify-center mt-20">
        <TypewriterEffectSmooth
          words={[
            { text: "La" },
            { text: "mia" },
            { text: "esperienza" },
            { text: "presso" },
            { text: "Omnia" },
            { text: "Group" },
          ]}
        />
      </div>
    </div>
  );
};

export default Page;
