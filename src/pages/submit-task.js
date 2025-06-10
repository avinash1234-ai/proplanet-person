import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SubmitTask() {
  return (
    <>
      <Header />
      <main>
        <section>
          <h2>Submit Task</h2>
          
          <form>
            <label htmlFor="task">Task Completed:</label>
            <input type="text" id="task" placeholder="E.g., Planted a tree" />
            <label htmlFor="proof">Proof (Image/URL):</label>
            <input type="text" id="proof" placeholder="Paste link here" />
            <button type="submit">Submit</button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}