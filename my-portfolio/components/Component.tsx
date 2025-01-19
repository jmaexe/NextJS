"use client";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "motion/react";

const Component = () => {
  const color = useMotionValue("transparent");
  const background = useMotionTemplate`linear-gradient(to bottom,black,${color})`;

  return (
    <motion.div
      style={{
        width: 500,
        height: 500,
        background,
      }}
      // onMouseEnter={() => {
      //   animate(color, "black", { duration: 1 });
      // }}
      // onMouseLeave={() => {
      //   animate(color, "transparent", { duration: 1 });
      // }}
      onClick={() => {
        animate(color, "black", { duration: 2000 });
      }}
    />
  );
};
export default Component;
