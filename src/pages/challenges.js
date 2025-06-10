import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WeeklyChallengeTimer from "@/components/WeeklyChallengeTimer";

export default function Challenges() {
  return (
    <>
    
      <Header />
      <WeeklyChallengeTimer />

      <main>
        <section>
          <h2>Weekly Challenges</h2>
          <p>🌱 This week: Collect 5 plastic bottles and recycle them!</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
