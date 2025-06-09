import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Profile() {
  return (
    <>
      <Header />
      <main>
        <section>
          <h2>Your Profile</h2>
      <p>Name: Avinash</p>
      <p>Email: avinashgreen@gmail.com</p>
      <p>Tasks Completed: 12</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
