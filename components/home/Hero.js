import Image from "next/image";

import smallThreeCards from "../../public/images/three-cards-small.svg";

import mainBanner from "../../public/images/main-banner.png";
import Praticles from "./Praticles";
import EmblaCarousel from "../ui/EmblaCarousel";

const AppPlatforms = [
  {
    name: "iOS",
    image: "/images/app-store.png",
    href: "#",
  },
  {
    name: "Android",
    image: "/images/google-play.png",
    href: "#",
  },
];

function Hero() {
  return (
    <section className="max-w-[1200px] mx-auto text-center pt-6 relative overflow-x-hidden lg:px-0">
      <Praticles />
      <div className=" lg:max-w-[800px] mx-auto">
        <Image
          src={smallThreeCards}
          alt="Small three cards image on hero section on amuse.so"
          className="object-center object-cover inline-block mx-auto"
        />
        <h1 className="text-transparent bg-clip-text bg-custom-gradient font-extrabold text-[40px] lg:text-[68px] leading-[1.2] mb-6">
          Unlock Your Potential, One Spark at a Time
        </h1>
        <p className="mb-10 font-medium text-base text-primary-100">
          Amuse App - Where Curiosity Meets Growth
        </p>
      </div>

      <div className="flex items-center justify-center gap-6 mb-10">
        {AppPlatforms.map((platform, index) => (
          <Image
            key={index}
            src={platform.image}
            alt={`Image of ${platform.title}`}
            width={160}
            height={160}
            className="object-cover object-center max-w-[152px]"
          />
        ))}
      </div>
      <Image
        src={mainBanner}
        alt="Main banner image from amuse.so"
        className="max-w-[1164px] hidden lg:inline-block mx-auto"
      />
      <EmblaCarousel
        slides={[
          "/images/slide-1.png",
          "/images/slide-2.png",
          "/images/slide-3.png",
        ]}
        options={{}}
      />
    </section>
  );
}

export default Hero;
