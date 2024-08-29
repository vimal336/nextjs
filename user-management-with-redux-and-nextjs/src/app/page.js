import Link from "next/link";


export const metadata = {
  title: "Home page",
  description: "Generated for about page",
};

export default function Home() {
  return (
    <>
    <nav className="bg-gray-800 p-4">
        <ul className="flex space-x-4">
          <li>
            <Link href="/about">
              <a className="text-white hover:text-gray-300">About</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a className="text-white hover:text-gray-300">Contact</a>
            </Link>
          </li>
          <li>
            <Link href="/adduser">
              <a className="text-white hover:text-gray-300">Add User</a>
            </Link>
          </li>
        </ul>
      </nav>

      <h1 className="text-2xl font-bold mt-4">User Management</h1>
    </>
  );
}
