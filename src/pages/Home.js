import HeroSlider from "../components/Home/HeroSlider/HeroSlider";
import OurSolutions from "../components/Home/OurSolutions/OurSolutions";
import MachineCategories from "../components/Home/MachineCategories/MachineCategories";
import WhyChooseUs from "../components/Home/WhyChooseUs/WhyChooseUs";
import TrustedBrands from "../components/Home/TrustedBrands/TrustedBrands";
import Statistics from "../components/Home/Statistics/Statistics";
import FeaturedMachines from "../components/Home/FeaturedMachines/FeaturedMachines";
import ContactCTA from "../components/Home/ContactCTA/ContactCTA";

function Home() {
  return (
    <>
      <HeroSlider />
      <OurSolutions />
      <MachineCategories />
      <WhyChooseUs />
      <TrustedBrands />
      <Statistics />
      <FeaturedMachines />
      <ContactCTA />
    </>
  );
}

export default Home;
