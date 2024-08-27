import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <h1>Nika Help Desk</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  );
}
