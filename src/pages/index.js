import Header from '@/components/Header'
import Footer from '@/components/Footer'


export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section>
          <h2>Welcome to ProPlanetPerson Website</h2>
          <form>
            <label>Email:</label>
            <input type="email" placeholder="you@example.com" />
            <label>Password:</label>
            <input type="password" placeholder="••••••" />
            <button type="submit">Login</button>
            <button type="button">Sign Up</button>
          </form>
          <div class="login-image">
      <img src="pro.jpg" alt="Pro Planet Person" />
    </div>

        </section>
      </main>
       
      <Footer />
    </>
  );
}