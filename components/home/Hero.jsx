import Image from "next/image";

import smallThreeCards from "../../public/images/three-cards-small.svg";

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
    <section className="max-w-[1200px] mx-auto text-center pt-6">
      <Image
        src={smallThreeCards}
        alt="Small three cards image on hero section on amuse.so"
        className=" object-center object-cover inline-block mx-auto"
      />
      <h1 className="text-transparent bg-clip-text bg-custom-gradient font-extrabold text-[68px] leading-[1.2] mb-6 max-w-[800px] mx-auto">
        Unlock Your Potential, One Spark at a Time
      </h1>
      <p className="mb-10 font-medium text-base text-primary-100">
        Amuse App - Where Curiosity Meets Growth
      </p>

      <div className="flex items-center justify-center gap-6">
        {AppPlatforms.map((platform, index) => (
          <Image
            key={index}
            src={platform.image}
            alt={`Image of ${platform.title}`}
            width={160}
            height={160}
            className="object-cover w-[152px]"
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;
