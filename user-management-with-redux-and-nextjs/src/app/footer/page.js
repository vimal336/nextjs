import Link from "next/link";
import Navbar from "../navbar/page"

// export const metadata = {
//   title: "Footer page",
//   description: "Generated for Contact page",
// };

export default function Footer() {
  return (
    <>
    <footer className="bg-gray-800 text-white py-6">
    <div className="container mx-auto text-center">
      <p className="mb-4">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mb-4">
        <Link href="/privacy-policy" className="hover:underline">
          Privacy Policy
        </Link>
        <Link href="/terms-of-service" className="hover:underline">
          Terms of Service
        </Link>
        <Link href="/contact" className="hover:underline">
          contact
        </Link>
      </div>
      <div>
        <Link
          href="https://www.twitter.com"
          className="inline-block mx-2 text-blue-400 hover:text-blue-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </Link>
        <Link
          href="https://www.facebook.com"
          className="inline-block mx-2 text-blue-600 hover:text-blue-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </Link>
        <Link
          href="https://www.linkedin.com"
          className="inline-block mx-2 text-blue-700 hover:text-blue-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </Link>
      </div>
    </div>
  </footer>
  </>
    );
  
}
