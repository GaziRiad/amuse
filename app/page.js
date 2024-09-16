import Hero from "@/components/home/Hero";
import OurVision from "@/components/home/OurVision";
import Plans from "@/components/home/Plans";
import WhyAmuse from "@/components/home/WhyAmuse";

function page() {
  return (
    <div className="">
      <Hero />
      <WhyAmuse />
      <OurVision />
      <Plans />
    </div>
  );
}

export default page;
