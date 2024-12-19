
import Blogs from "@/components/home/Blogs";
import DonateOptions from "@/components/home/DonateOptions";
import Hero from "@/components/home/Hero";
import Impact from "@/components/home/Impact";
import Join from "@/components/home/Join";
import Navbar from "@/components/home/Navbar";
import OngoingPrograms from "@/components/home/OngoingPrograms";
import Resources from "@/components/home/Resources";
import Story from "@/components/home/Story";

export default function Home() {
  return (
    <>
     <Navbar />
     <Hero />
     <Story />
     <DonateOptions />
     <OngoingPrograms />
     <Blogs />
     <Resources />
     <Impact />
     <Join />
    </>
  );
}
