"use client"
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
//import { addItem, updateItem, deleteItem } from "../reducer/itemSlice";
import Navbar from "../navbar/page"

export default function Home() {
  const items = useSelector((state) => state.items.items);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [userId, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false); 
  }, []);


  const handleAdd = () => {
    setLoading(true);
    if (editId) {
      dispatch(updateItem({ id: editId, name, userId, email }));
      setEditId(null);
    } else {
      dispatch(addItem({ id: Date.now(), name, userId, email }));
    }
    setName("");
    setUserId("");
    setEmail("");
    setLoading(false);
  };

  const handleEdit = (item) => {
    setName(item.name);
    setUserId(item.userId);
    setEmail(item.email);
    setEditId(item.id);
  };

  const handleDelete = (id) => {
    setLoading(true);
    dispatch(deleteItem(id));
    setLoading(false);
  };

  if(loading) {
    return <div className="text-center mt-8 text-green-500 font-bold">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4 text-center">CRUD with Redux Persist</h1>
        <div className="flex flex-col items-center mb-6">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="border border-gray-300 p-2 rounded-lg w-full max-w-sm mb-2"
          />
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            placeholder="User ID"
            className="border border-gray-300 p-2 rounded-lg w-full max-w-sm mb-2"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="border border-gray-300 p-2 rounded-lg w-full max-w-sm mb-2"
          />
          <button
            onClick={handleAdd}
            className="bg-blue-500 text-white p-2 rounded-lg w-full max-w-sm hover:bg-blue-600 transition duration-300"
          >
            {editId ? "Update" : "Add"}
          </button>
        </div>
        <ul className="list-disc pl-6">
          {items.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center bg-white p-3 mb-2 rounded-lg shadow-md"
            >
              <div>
                <div><strong>Name:</strong> {item.name}</div>
                <div><strong>User ID:</strong> {item.userId}</div>
                <div><strong>Email:</strong> {item.email}</div>
              </div>
              <div>
                <button
                  onClick={() => handleEdit(item)}
                  className="bg-yellow-500 text-white p-1 rounded-lg mr-2 hover:bg-yellow-600 transition duration-300"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="bg-red-500 text-white p-1 rounded-lg hover:bg-red-600 transition duration-300"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
