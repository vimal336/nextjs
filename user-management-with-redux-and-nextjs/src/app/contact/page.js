import Link from "next/link";


export const metadata = {
  title: "Contact page",
  description: "Generated for Contact page",
};

export default function Contact() {
  return (
    <div >
      <Link href="/">
        <h2>Back to home</h2>
      </Link>
      <Link href="/about">
        <h2>Go to about</h2>
      </Link>
    </div>
  );
}
