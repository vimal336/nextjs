import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-gray-900">
            Home
          </Link>
          <Link 
            href="/settings" 
            className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg transition-colors"
          >
            Settings
          </Link>
          <Link 
            href="/Myusers" 
            className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg transition-colors"
          >
            Current User
          </Link>
          <Link 
            href="/Dashboard" 
            className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg transition-colors"
          >
            Dashboard
          </Link>
        
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Home page
          </h1>
          <p className="text-lg text-gray-600 mb-8">
           Homepage with clerk auth 
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
            Get Started
          </button>
        </div>

      </div>
    </main>
  );
}
