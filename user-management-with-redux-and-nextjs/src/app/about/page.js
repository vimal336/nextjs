import Footer from "../footer/page";
import Navbar from "../navbar/page"

export const metadata = {
  title: "About page",
  description: "Generated for about page",
};

export default function About() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-8 p-4">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg text-grey-700">
          Welcome to the About page! Our mission is to provide excellent services
          and create valuable products for our users. We are a dedicated team of
          professionals committed to delivering the best experience possible.
        </p>
        <p className="mt-4 text-lg text-gray-700">
          Our journey started with a passion for technology and a drive to
          innovate. We believe in continuous learning and improvement, always
          striving to push the boundaries of whats possible.
        </p>
      </div>
      <Footer/>
    </>
  );
}
