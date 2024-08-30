import Link from "next/link";
import "../globals.css";

export default function Header() {
  return (
    <>
      <nav className="bg-gray-800 py-4 md:py-6 lg:py-8">
        <ul className="flex justify-center space-x-4">
          <li>
            <Link href="/" className="text-white hover:text-gray-300 transition duration-300 ease-in-out">
             HOME
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-white hover:text-gray-300 transition duration-300 ease-in-out">
             ABOUT
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-white hover:text-gray-300 transition duration-300 ease-in-out">
             CONTACT
            </Link>
          </li>
          <li>
            <Link href="/adduser" className="text-white hover:text-gray-300 transition duration-300 ease-in-out">
              ADD USER
            </Link>
          </li>
        </ul>
      </nav>

      <h1 className="text-4xl font-bold mb-8 text-center uppercase mt-8">User Management</h1>
    </>
  );
}
