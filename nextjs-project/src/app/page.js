import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button className="bg-blue-500 rounded text-white font-bold py-2 px-2 px-4 ">Back</button>
      <h1>Next JS Project</h1>
      <button>Back</button>
      <Link className="text-blue-600" href="/">Home</Link>
      <Link className="text-blue-600" href="/dashboard">Dashboard</Link>
      <Link className="text-blue-600" href="/dashboard/settings">Settings</Link>
    </main>
  );
}
