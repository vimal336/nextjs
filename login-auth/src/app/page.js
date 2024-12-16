import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <h1>
      <Link href="/login" className="bg-green-500 flex justify-center items-center h-screen ">Click here to Login</Link>
    </h1>
  );
}
