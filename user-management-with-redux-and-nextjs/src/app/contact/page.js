import Navbar from "../navbar/page"
import Footer from "../footer/page";
import Link from 'next/link';

export const metadata = {
  title: "Contact Page",
  description: "Contact us for more information.",
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-700 mb-4">
            We’d love to hear from you! Please reach out to us using the following contact details:
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Email:</strong> <a href="mailto:contact@yourcompany.com" className="text-blue-500 hover:text-blue-700">contact@yourcompany.com</a>
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Phone:</strong> <a href="tel:+1234567890" className="text-blue-500 hover:text-blue-700">(123) 456-7890</a>
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Address:</strong> 123 Main Street, City, Country
          </p>
        </div>
        <div className="mt-6 text-center">
  <Link href="/" className="text-blue-500 hover:text-blue-700">Back to home</Link>
  <br />
  <Link href="/about" className="text-blue-500 hover:text-blue-700">Go to about</Link>
</div>
      </main>
      <Footer />
    </div>
  );
}
