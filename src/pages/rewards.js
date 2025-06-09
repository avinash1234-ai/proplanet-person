import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Rewards() {
  return (
    <>
      <Header />
      <main>
        <section>
          <h2>Coin Balance & Rewards</h2>
          <p>💰 You have <strong>150 Coins</strong></p>
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
