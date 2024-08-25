"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Dashboard() {
  const router = useRouter();
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      setGreeting("Good Morning");
    } else if (currentHour < 18) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }
  }, []);

  const back = () => {
    router.push("/");
  };

  const logout = () => {
    alert("Logging out...");
    router.push("/");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">{greeting}, User!</h1>
      <p className="text-lg mb-8">Welcome to your Dashboard</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-2xl font-bold mb-2">Users</h2>
          <p className="text-xl">1,234</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-2xl font-bold mb-2">Sales</h2>
          <p className="text-xl">$56,789</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-2xl font-bold mb-2">Revenue</h2>
          <p className="text-xl">$123,456</p>
        </div>
      </div>

      <div className="flex space-x-4">
        <button
          onClick={back}
          className="bg-blue-500 hover:bg-blue-700 rounded text-white font-bold py-2 px-4"
        >
          Back
        </button>
        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-700 rounded text-white font-bold py-2 px-4"
        >
          Logout
        </button>
      </div>
    </main>
  );
}
