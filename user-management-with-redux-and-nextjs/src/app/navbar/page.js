import Link from "next/link";


export const metadata = {
  title: "Header",
  description: "Generated for Header page",
};

export default function Header() {
  return (
    <>
   <nav className="bg-gray-800 p-4">
        <ul className="flex space-x-4">
          <li>
            <Link href="/about" className="text-white hover:text-gray-300">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-white hover:text-gray-300">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/adduser" className="text-white hover:text-gray-300">
              Add User
            </Link>
          </li>
        </ul>
      </nav>

      <h1 className="text-2xl font-bold mt-4">User Management</h1>
    </>
  );
}
