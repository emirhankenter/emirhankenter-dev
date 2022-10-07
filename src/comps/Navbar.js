import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/logo.png" width={128} height={128} />
        {/* <h1>Pika Games</h1> */}
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      {/* <Link href="/about"><a>About</a></Link> */}
      <Link href="/contact">
        <a>Contact</a>
      </Link>
      <Link href="/games">
        <a>Games</a>
      </Link>
      <Link href="/packages">
        <a>Packages</a>
      </Link>
    </nav>
  );
};

export default Navbar;
