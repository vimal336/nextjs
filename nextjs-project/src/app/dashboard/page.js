"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  const back = () => {
    router.push("/");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button
        onClick={back}
        className="bg-blue-500 rounded text-white font-bold py-2 px-2 px-4 "
      >
        Back
      </button>
      <h1>Dashboard Page</h1>
    </main>
  );
}
