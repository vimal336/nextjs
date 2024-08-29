import Link from "next/link";


export const metadata = {
  title: "About page",
  description: "Generated for about page",
};

export default function About() {
  return (
    <>
      <div>
        <Link href="/" >
          <h2>Back to home</h2>
        </Link>
        <Link
          href="/contact">
          <h2>Go to contact</h2>
        </Link>
      </div>
    </>
  );
}
