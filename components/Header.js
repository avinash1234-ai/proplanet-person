import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <h1>ProPlanet Person 🌍</h1>
      <nav>
        <Link href="/">Login / Signup</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/submit-task">Submit Task</Link>
        <Link href="/challenges">Weekly Challenges</Link>
        <Link href="/rewards">Rewards</Link>
        <Link href="/leaderboard">Leaderboard</Link>
        <Link href="/profile">Profile</Link>
        <Link href="/eco-helper">Eco-Helper</Link>
      </nav>
    </header>
  );
}