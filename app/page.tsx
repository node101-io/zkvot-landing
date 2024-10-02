import IntroSection from "@/components/IntroSection";
import NavBar from "@/components/NavBar";
import TheChallenge from "@/components/TheChallenge/TheChallenge";
import TheSolution from "@/components/TheSolution/TheSolution";
import ZKProofSection from "@/components/ZKProofSection/ZKProofSection";
import Sequencing from "@/components/Sequencing/Sequencing";
import ElectionsHexagon from "@/components/ElectionsHexagon/ElectionsHexagon";

export default function Home() {
  return (
    <div>
      <NavBar />
      <IntroSection />
      <TheChallenge />
      <div className="px-4 xl:px-24">
        <TheSolution />
        <ZKProofSection />
        <Sequencing />
        <ElectionsHexagon />
      </div>
    </div>
  );
}
