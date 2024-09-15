import Image from "next/image";
import praticle from "../../public/images/particle.svg";

function Praticles() {
  return (
    <div className="particles">
      <Image
        src={praticle}
        alt="praticle image from amuse.so"
        className="object-cover object-center absolute"
      />
      <Image
        src={praticle}
        alt="praticle image from amuse.so"
        className="object-cover object-center absolute"
      />
      <Image
        src={praticle}
        alt="praticle image from amuse.so"
        className="object-cover object-center absolute"
      />
      <Image
        src={praticle}
        alt="praticle image from amuse.so"
        className="object-cover object-center absolute"
      />
      <Image
        src={praticle}
        alt="praticle image from amuse.so"
        className="object-cover object-center absolute"
      />
    </div>
  );
}

export default Praticles;
