import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CoinCounter from "@/components/CoinCounter";

export default function Rewards() {
  return (
    <>
      <Header />
      <CoinCounter />
      <main>
        <section>
         
          <ul>
            <li>Eco Badge - 100 coins</li>
            <li>Plant Kit - 200 coins</li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
