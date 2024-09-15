"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

const EmblaCarousel = (props) => {
  const { slides, options } = props;

  // Calculate the central slide index

  const [emblaRef, emblaApi] = useEmblaCarousel({
    ...options,
    startIndex: 2,
  });

  return (
    <section className="embla w-full lg:hidden ">
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex items-center justify-center gap-5">
          {slides.map((slide, index) => (
            <div
              className="embla__slide min-w-[60%] flex justify-center"
              key={index}
            >
              <Image
                src={slide}
                width={600}
                height={600}
                alt="slide from amuse.so"
                className=" "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
