"use client"
import { useSelector } from "react-redux";
import Navbar from "../navbar/page"
import Footer from "../footer/page";

export default function ViewUsers() {
  const items = useSelector((state) => state.items.items);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4 text-center">View Users</h1>
        <ul className="list-disc pl-6">
          {items.map((item) => (
            <li
              key={item.id}
              className="flex flex-col bg-white p-3 mb-2 rounded-lg shadow-md"
            >
              <div><strong>Name:</strong> {item.name}</div>
              <div><strong>User ID:</strong> {item.userId}</div>
              <div><strong>Email:</strong> {item.email}</div>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
}
