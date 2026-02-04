import { useEffect, useState } from "react";
import api from "../api/authApi";

export default function MyPurchases() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPurchases = async () => {
      try {
        console.log("===== MY PURCHASES DEBUG START =====");

        const token = localStorage.getItem("token");

        //  debug token
        console.log("Stored token:", token);

        if (!token) {
          console.error(" No token found in localStorage");
          return;
        }

        console.log(" Calling API  /purchase/my-books");
        console.log("Using token:", token);

        const res = await api.get("/purchase/my-books", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log(" API SUCCESS");
        console.log("Full response:", res);
        console.log("Books:", res.data.books);

        //  IMPORTANT: backend now returns { user_id, books }
        setBooks(res.data.books || []);

      } catch (err) {
        console.log(" API ERROR");

        if (err.response) {
          console.log("Status:", err.response.status);
          console.log("Data:", err.response.data);
        }

        console.log("Token used:", localStorage.getItem("token"));
        console.log(err);
      } finally {
        setLoading(false);
        console.log("===== MY PURCHASES DEBUG END =====");
      }
    };

    fetchPurchases();
  }, []);

  return (
    <div className="p-6">

      <h2 className="text-xl font-bold mb-4"> My Purchases</h2>

      {loading && <p>Loading purchases...</p>}

      {!loading && books.length === 0 && (
        <p className="text-gray-500">No purchased books yet</p>
      )}

      {books.map((b) => (
        <div key={b.id} className="border p-3 mb-2 rounded shadow">
          {b.title}
        </div>
      ))}
    </div>
  );
}
