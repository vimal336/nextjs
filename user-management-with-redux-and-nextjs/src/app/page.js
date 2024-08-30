import Link from "next/link";
import Navbar from "./navbar/page"
import Footer from "./footer/page"


export const metadata = {
  title: "Home page",
  description: "Generated for about page",
};

export default function Home() {
    return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto p-4">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl text-center font-semibold mb-4">Welcome to the User Management System</h2>
          <p className="text-gray-700 mb-4 text-center">
            This is a simple user management system where you can view, add, update, and delete users.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/adduser">
              <div className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 ease-in-out cursor-pointer">
                Add New User
              </div>
            </Link>
            <Link href="/viewusers">
              <div className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300 ease-in-out cursor-pointer">
                View Users
              </div>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
