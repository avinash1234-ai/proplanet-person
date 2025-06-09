import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Dashboard() {
  return (
    <>
      <Header />
      <main>
        <section>
          <h2>Eco Tasks</h2>
          <ul>
            <li>Recycle Plastic Waste</li>
            <li>Plant a Tree</li>
            <li>Use Public Transport</li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}