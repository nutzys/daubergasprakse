import AboutMe from "@/components/Home/AboutMe";
import Hero from "@/components/Home/Hero";
import InformationField from "@/components/Home/InformationField";
import Services from "@/components/Home/Services";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutMe />
      <Services />
      <InformationField />
    </div>
  );
}
