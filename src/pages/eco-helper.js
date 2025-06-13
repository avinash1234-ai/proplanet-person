import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EcoHelper from "@/components/EcoAIHelper";

export default function EcoHelperPage() {
  return (
    <>
    <Header />
    <main>
      <h1>🌱 Eco AI Assistant</h1>
      <EcoHelper />
    </main>
    <Footer />
    </>
  );
}
