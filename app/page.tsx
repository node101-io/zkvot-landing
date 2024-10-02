import IntroSection from "@/components/IntroSection";
import NavBar from "@/components/NavBar";
import TheChallenge from "@/components/TheChallenge/TheChallenge";
import TheSolution from "@/components/TheSolution/TheSolution";
import ZKProofSection from "@/components/ZKProofSection/ZKProofSection";
import Sequencing from "@/components/Sequencing/Sequencing";

export default function Home() {
  return (
    <div>
      <div className="px-9">
        <NavBar />
        <IntroSection />
      </div>
      <TheChallenge />
      <div className="px-4 xl:px-24">
        <TheSolution />
        <ZKProofSection />
        <Sequencing />
      </div>
    </div>
  );
}
