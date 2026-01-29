import { useState } from "react";
import api from "../api";

export default function AddAuthor() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAdd = async () => {
  try {
    console.log("Sending request...");
     console.log("token:", localStorage.getItem("token"));

    const res = await api.post("/auth/vendor/add-author", {
      name,
      email,
      password,
    });

    console.log("Success:", res.data);

    alert("Author added successfully");

  } catch (err) {
    console.error("ERROR:", err.response?.data || err.message);
    alert("Failed to add author");
  }
};

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-xl font-bold">Add Author</h2>

      <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
