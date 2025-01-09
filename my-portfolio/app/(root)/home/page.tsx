import { CardsCarouselDemo } from "@/components/CardsCarouselDemo";
import { AnimatedCards } from "@/components/ui/animated-cards";
import { Timeline } from "@/components/ui/timeline";
import c_logo from "@/public/c_logo.png";
import css_logo from "@/public/css_logo.png";
import database_foto from "@/public/database_animali.png";
import html_logo from "@/public/html_logo.png";
import js_logo from "@/public/js_logo.png";
import lista_foto from "@/public/lista.png";
import registra_foto from "@/public/registra.png";
import Image from "next/image";
import React from "react";
const page = () => {
  return (
    <>
      <Timeline
        title="La mia carriera scolastica"
        description="Gli argomenti principali di informatica affrontati: "
        data={[
          {
            title: "Web Programming",
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
            title: "Programming Fundamentals",
            content: <CardsCarouselDemo />,
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
};

export default page;
