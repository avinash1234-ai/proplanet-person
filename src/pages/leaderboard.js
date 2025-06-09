import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Leaderboard() {
  return (
    <>
      <Header />
      <main>
        <section>
          <h2>Leaderboard</h2>
  <table>
    <thead>
      <tr>
        <th>Rank</th>
        <th>User</th>
        <th>Coins</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Akshay</td>
        <td>500</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Babu</td>
        <td>450</td>
      </tr>
      <tr>
        <td>3</td>
        <td>You</td>
        <td>150</td>
      </tr>
    </tbody>
  </table>
        </section>
      </main>
      <Footer />
    </>
  );
}
