import { ParallaxScroll } from "@/components/ui/ParallaxScroll";
import React from "react";
import { images } from "@/constants";
import Image from "next/image";
import AddImages from "@/components/AddImages";
const page = () => {
  return <div className="relative grid grid-cols-4 gap-4 w-full mt-20 justify-center p-4">
    {images.map((image, idx) => {
      return (
        <div key={idx}>
          <Image key={idx} className="border border-neutral-700 rounded-xl w-[300px] h-[300px] object-cover" height={200} width={200} src={image}/>
        </div>
      )
    })}
    <AddImages text={"Add Images"}/>
    </div>;
};

export default page;
