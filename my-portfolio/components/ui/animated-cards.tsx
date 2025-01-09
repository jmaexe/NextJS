"use client";

import { AnimatePresence, motion } from "motion/react";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import { SlArrowLeftCircle } from "react-icons/sl";

type Content = {
  title: string;
  description: string;
  src: StaticImageData;
};
export const AnimatedCards = ({
  contents,
  autoplay = false,
}: {
  contents: Content[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % contents.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + contents.length) % contents.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };
  return (
    // px-4 md:px-8 lg:px-12 py-20
    <div className="max-w-sm md:max-w-4xl mx-auto antialiased font-sans ">
      <div className="relative grid grid-cols-1 md:grid-cols-2  gap-20">
        <div>
          <div className="relative h-80 w-full">
            <AnimatePresence>
              {contents.map((content, index) => (
                <motion.div
                  key={content.title}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index) ? 999 : contents.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <Image
                    src={content.src}
                    alt={content.title}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex justify-between flex-col py-4">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-2xl font-bold dark:text-white text-black">
              {contents[active].title}
            </h3>
            {/* <p className="text-sm text-gray-500 dark:text-neutral-500">
              {contents[active].designation}
            </p> */}
            <motion.p className="text-lg text-gray-500 mt-8 dark:text-neutral-300">
              {contents[active].description.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div className="flex gap-4 pt-12 md:pt-0">
            <button
              onClick={handlePrev}
              className="h-7 w-7 rounded-full  flex items-center justify-center group/button"
            >
              <SlArrowLeftCircle className="h-6 w-6 dark:text-white text-black-950" />
            </button>
            <button
              onClick={handleNext}
              className="h-7 w-7 rounded-full  dark:bg-neutral-800 flex items-center justify-center group/button"
            >
              <BsArrowRightCircle className="h-6 w-6 dark:text-white text-black-950" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
