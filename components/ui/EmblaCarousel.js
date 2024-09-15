"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

const EmblaCarousel = (props) => {
  const { slides, options } = props;

  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  return (
    <section className="embla w-full lg:hidden" dir="rtl">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex items-center gap-5">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                <Image
                  src={slide}
                  width={600}
                  height={600}
                  alt="slide from amuse.so"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
