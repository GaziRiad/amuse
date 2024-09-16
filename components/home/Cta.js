import Image from "next/image";

import threeCards from "../../public/images/three-cards-small.svg";
import MobileApps from "../MobileApps";

function Cta() {
  return (
    <section className="bg-cta-img relative mx-auto -mt-[190px] mb-28 max-w-[1200px] bg-contain bg-center bg-no-repeat px-5 pt-[260px] lg:-mt-[112px]">
      <div className="border-b border-primary-700 pb-16">
        <Image
          src={threeCards}
          alt="Three cards image from amuse.so website"
          className="mx-auto mb-5 mt-20 h-20 w-20 object-cover"
        />

        <h2 className="mx-auto mb-10 max-w-lg bg-secondary-heading-gradient bg-clip-text text-center text-4xl font-bold leading-relaxed text-transparent lg:mb-16 lg:text-[52px]">
          Start Your Journey of Curiosity
        </h2>

        <MobileApps />
      </div>
    </section>
  );
}

export default Cta;
