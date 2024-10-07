import React from 'react'

import { FaTruckMonster } from "react-icons/fa6";
import { PiCarSimpleLight } from "react-icons/pi";
import { GiF1Car, GiMechanicalArm } from "react-icons/gi";
import { TbCarSuv } from "react-icons/tb";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
 
const features = [
  {
    Icon: PiCarSimpleLight,
    name: "All Terrain Bot",
    description: "We automatically save your files as you type.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: FaTruckMonster,
    name: "Sumo Fights",
    description: "Robot-sumo, or robo-sumo, is a type of robot combat in which two robots attempt to push each other out of a circle (in a similar fashion to the sport of sumo). The robots used in this competition are called sumobots",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: GiF1Car,
    name: "Line Follower",
    description: "Supports 100+ languages and counting.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: TbCarSuv,
    name: "War Bot",
    description: "Use the calendar to filter your files by date.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: GiMechanicalArm,
    name: "Robotic Arm",
    description:
      "Get notified when someone shares a file or mentions you in a comment.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];


const BentoGrid2 = () => {
  return (
    <BentoGrid className="lg:grid-rows-3 container min-h-max">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  )
}

export default BentoGrid2
