import IntroSection from "@/components/IntroSection";
import NavBar from "@/components/NavBar";
import TheChallenge from "@/components/TheChallenge/TheChallenge";
import TheSolution from "@/components/TheSolution/TheSolution";
import ZKProofSection from "@/components/ZKProofSection/ZKProofSection";
import Sequencing from "@/components/Sequencing/Sequencing";
import ElectionsHexagon from "@/components/ElectionsHexagon/ElectionsHexagon";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="max-w-[1440px] w-full px-2">
        <NavBar />
        <IntroSection />
      </div>
      <TheChallenge />

      <div className="max-w-[1440px] w-full px-2">
        <div className="">
          <TheSolution />
          <ZKProofSection />
          <Sequencing />
          <ElectionsHexagon />
        </div>
        <Footer />
      </div>
    </div>
  );
}
