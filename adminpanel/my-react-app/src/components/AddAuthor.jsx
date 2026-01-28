import { useState } from "react";
import api from "../api";

export default function AddAuthor() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAdd = async () => {
    await api.post("/auth/vendor/add-author", {
      name,
      email,
      password,
    });

    alert("Author added!");
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
