import Hero from "@/components/home/Hero";
import WhyAmuse from "@/components/home/WhyAmuse";

function page() {
  return (
    <div className="h-screen bg-primary-900">
      <Hero />
      <WhyAmuse />
    </div>
  );
}

export default page;
