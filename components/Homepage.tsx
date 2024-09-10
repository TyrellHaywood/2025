"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

const transitionConfig = (delay = 0) => ({
  type: "spring",
  stiffness: 50,
  duration: 0.5,
  delay: delay,
});

const rippleConfig = () => ({
  type: "spring",
  duration: 2,
  repeat: Infinity,
  RepeatType: "mirror",
});

const parentVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};

const childVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 50,
      duration: 1,
    },
  },
};

export default function Homepage() {
  return (
    <>
      <motion.div
        className="flex flex-col items-center w-4/5 z-10 mt-[-150px]"
        variants={parentVariants}
      >
        <motion.div
          className="flex justify-center mb-[80px]"
          transition={transitionConfig()}
          variants={childVariants}
          initial="hidden"
          animate="visible"
        >
          <Image
            className=" w-[90%] max-w-[325px]"
            src="/images/logo-text-main.svg"
            alt="2025 logo"
            width={1080}
            height={1080}
          />
        </motion.div>

        <motion.div
          id="text"
          transition={transitionConfig(0)}
          variants={parentVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            className="text-center text-[14px] text-font"
            variants={childVariants}
          >
            CANADIAN UNIVERSITY
          </motion.h2>
          <motion.h2
            className="text-center text-[14px] text-font"
            variants={childVariants}
          >
            SOFTWARE ENGINEERING CONFERENCE
          </motion.h2>
          <motion.h1
            className="text-shadow text-center text-[40px] font-bold"
            variants={childVariants}
          >
            EAST CANADA - JANUARY 2025
          </motion.h1>
          <motion.div
            className="flex justify-center mt-5"
            variants={childVariants}
          >
            <motion.button
              className="w-[225px] h-[44px] bg-[#FEFEFE] text-font main-button"
              variants={childVariants}
            >
              BUY TICKETS
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}
