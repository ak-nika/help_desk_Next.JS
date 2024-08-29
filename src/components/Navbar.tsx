import Link from "next/link";
import Logo from "@/assets";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav>
      <Image
        src={Logo}
        alt={`Nika Help Desk Logo`}
        width={70}
        quality={100}
        placeholder="blur"
      />
      <h1>Nika Help Desk</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  );
}
