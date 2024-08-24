import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Next JS Project</h1>
      <Link className="text-blue-600" href="/dashboard">Dashboard</Link>
      <Link className="text-blue-600" href="/dashboard/settings">Settings</Link>
    </main>
  );
}
