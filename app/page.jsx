"use client";
import { AnimatedBeamIrc } from "@/components/AnimatedBeamIrc";
import BentoGrid2 from "@/components/bento-grid";
import Carousel2 from "@/components/carousel";
import Landing from "@/components/Landing";
import { RippleDemo } from "@/components/RippleDemo";

export default function Home() {
  return (
    <main className="flex flex-col justify-center w-full">
      <TracingBeam
        className={`mx-auto`}
        children={
          <>
            <Landing />
            <BentoGrid2 />
            <Carousel2 />
            <AnimatedBeamIrc />
            <RippleDemo text="Join The Revolution" />
          </>
        }
      />
    </main>
  );
}
