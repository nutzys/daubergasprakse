import AboutMe from "@/components/Home/AboutMe";
import ApplyForm from "@/components/Home/ApplyForm";
import FeaturedOn from "@/components/Home/FeaturedOn";
import Hero from "@/components/Home/Hero";
import InformationField from "@/components/Home/InformationField";
import Reasons from "@/components/Home/Reasons";
import Services from "@/components/Home/Services";
import Testimonials from "@/components/Home/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutMe />
      <Services />
      <InformationField />
      <Reasons />
      <FeaturedOn />
      <Testimonials />
      <ApplyForm />
    </div>
  );
}
