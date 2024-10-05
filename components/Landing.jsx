"use client"
import Image from "next/image";
import React from "react";
import asset1 from "../assets/assets3.svg";
import circle from "../assets/circle.svg";
import HyperText from "@/components/ui/hyper-text";
import {motion, useScroll} from "framer-motion"
import { AnimatedGradientTextDemo } from "./AnimatedGradientTextDemo";

import { useRef } from "react";


const Landing = () => {
   const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["0 1", "1.33 1"]
  });
  return (
    <div className="flex flex-col">
      <div className="relative w-full overflow-hidden flex justify-center items-center px-32 py-28 min-h-screen">
      <Image
        src={circle}
        height={1500}
        width={1500}
        className="absolute rounded-full animate-spin opacity-50 flex items-center z-10"
      />
      <h1 className=" text-8xl font-convergence z-20 top-64">
        ITER ROBOTICS CLUB
      </h1>
      <Image src={asset1} height={600} width={600} className="z-30" />

        <AnimatedGradientTextDemo />
        </div>
      <motion.div
        ref={targetRef}
        style={{
          scale: scrollYProgress,
          opacity: scrollYProgress
        }}
        className="h-20 flex justify-center"
      >
        <HyperText
          className="text-4xl font-bold text-black dark:text-cyan-200 flex justify-center"
          text="Keep Robotizing..."
        />
      </motion.div>
    </div>
  );
};

export default Landing;
