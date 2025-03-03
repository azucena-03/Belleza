import React from "react";

export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <div className="col-span-full font-playfairDisplay h-[104px] text-3xl md:text-4xl lg:text-5xl flex overflow-hidden whitespace-nowrap group relative">
      <button
        className="transition-[animation] duration-200 h-full bg-secondary text-neutral-200 border-2 border-black absolute w-full z-10 group-hover:animate-slide group-[:not(:hover)]:animate-slidein">
        {children}
      </button>
      <button className="h-full bg-primary text-secondary border-2 border-black absolute w-full">
        {children}
      </button>
    </div>
  );
}
