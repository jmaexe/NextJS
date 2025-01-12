"use client";
import { motion } from "motion/react";

const Component = () => {
  return (
    <motion.div
      className="w-96 h-96"
      layout
      initial={{
        background: "linear-gradient(to bottom, black,transparent)",
        scale: 0.2,
      }}
      whileHover={{
        scale: 1,
        transition: { duration: 300 },
      }}
    />
  );
};
export default Component;
