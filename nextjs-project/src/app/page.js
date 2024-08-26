"use client";  // Mark this component as a Client Component

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 space-y-8">
      <h1 className="text-5xl font-bold text-center">Welcome to Next.js Project</h1>
      

      <div className="flex flex-col items-center space-y-4">
        <Link href="/" className="text-blue-600 text-xl">
          Home
        </Link>
        <Link href="/dashboard" className="text-blue-600 text-xl">
          Dashboard
        </Link>
        <Link href="/dashboard/settings" className="text-blue-600 text-xl">
          Settings
        </Link>
      </div>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => window.history.back()}
      >
        Back
      </button>
    </main>
  );
}
