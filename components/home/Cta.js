"use client";

import Image from "next/image";

import threeCards from "../../public/images/three-cards-small.svg";
import MobileApps from "../MobileApps";
import { LampContainer } from "../ui/lamp";

import { motion } from "framer-motion";

function Cta() {
  return (
    <LampContainer>
      {/* <section className="relative mx-auto -mt-[190px] mb-28 max-w-[1200px] bg-contain bg-center bg-no-repeat px-5 pt-[260px] lg:-mt-[112px]"> */}
      <div className="border-b border-primary-700 pb-16">
        <Image
          src={threeCards}
          alt="Three cards image from amuse.so website"
          className="mx-auto mb-5 mt-20 h-20 w-20 object-cover"
        />

        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mx-auto mb-10 max-w-lg bg-secondary-heading-gradient bg-clip-text text-center text-4xl font-bold leading-relaxed text-transparent lg:mb-16 lg:text-[52px]"
        >
          Start Your Journey of Curiosity
        </motion.h1>

        {/* <h2 className="mx-auto mb-10 max-w-lg bg-secondary-heading-gradient bg-clip-text text-center text-4xl font-bold leading-relaxed text-transparent lg:mb-16 lg:text-[52px]">
          Start Your Journey of Curiosity
        </h2> */}

        <MobileApps />
      </div>
      {/* </section> */}
    </LampContainer>
  );
}

export default Cta;
