"use client"
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, updateItem, deleteItem } from "../reducers/itemSlice";

export default function Home() {
  const items = useSelector((state) => state.items.items);
  const dispatch = useDispatch();

  const [itemName, setItemName] = useState("");
  const [editId, setEditId] = useState(null);

  const handleAdd = () => {
    if (editId) {
      dispatch(updateItem({ id: editId, name: itemName }));
      setEditId(null);
    } else {
      dispatch(addItem({ id: Date.now(), name: itemName }));
    }
    setItemName("");
  };

  const handleEdit = (item) => {
    setItemName(item.name);
    setEditId(item.id);
  };

  const handleDelete = (id) => {
    dispatch(deleteItem(id));
  };

  return (
    <div>
      <h1>CRUD with Redux Persist</h1>
      <input
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        placeholder="Item Name"
      />
      <button onClick={handleAdd}>{editId ? "Update" : "Add"}</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => handleEdit(item)}>Edit</button>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
