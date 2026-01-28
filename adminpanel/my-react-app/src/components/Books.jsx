import React, { useEffect, useState } from "react";
import api from "../api";

const API_BASE = "http://localhost:8000";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const [image, setImage] = useState(null);
  const [pdf, setPdf] = useState(null);

  const [editId, setEditId] = useState(null);

  
  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    // no token = login
    if (!token) {
      window.location.href = "http://localhost:5173/auth/login";
      return;
    }

    // only admin + vendor allowed
    if (role !== "admin" && role !== "vendor") {
      alert("Unauthorized");
      window.location.href = "/";
      return;
    }

    fetchBooks();
  }, []);
// get boks
  const fetchBooks = async () => {
    try {
      const res = await api.get("/books");
      setBooks(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error("Fetch books error:", err);
    }
  };
// save books and add/update ok
  const handleSaveBook = async () => {
    if (!title || !author || !price || !quantity) {
      alert("All fields required");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("author", author);
    formData.append("price", price);
    formData.append("quantity", quantity);

    if (image) formData.append("image", image);
    if (pdf) formData.append("pdf", pdf);

    try {
      if (editId) {
        await api.put(`/books/${editId}`, formData);
      } else {
        await api.post("/books", formData);
      }

      closeModal();
      fetchBooks();
    } catch (err) {
      console.error(err);
      alert("Failed to save book");
    }
  };
// edit
  const handleEdit = (book) => {
    setEditId(book.id);
    setTitle(book.title);
    setAuthor(book.author);
    setPrice(book.price);
    setQuantity(book.quantity);
    setShowModal(true);
  };
//  delete
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this book?")) return;

    try {
      await api.delete(`/books/${id}`);
      fetchBooks();
    } catch (err) {
      console.error(err);
      alert("Delete failed");
    }
  };

  const handleViewPdf = (pdfPath) => {
    window.open(`${API_BASE}/public/${pdfPath}`, "_blank");
  };

  const closeModal = () => {
    setShowModal(false);
    setEditId(null);
    setTitle("");
    setAuthor("");
    setPrice("");
    setQuantity("");
    setImage(null);
    setPdf(null);
  };

  return (
    <div className="p-6">

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Books</h1>

        <button
          onClick={() => setShowModal(true)}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-800"
        >
          + Add Book
        </button>
      </div>

      <div className="bg-white rounded shadow overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">ID</th>
              <th className="p-3">Title</th>
              <th className="p-3">Author</th>
              <th className="p-3">Price</th>
              <th className="p-3">Quantity</th>
              <th className="p-3">Image</th>
              <th className="p-3">PDF</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {books.map((book) => {
              const imageUrl = book.image
                ? `${API_BASE}/public/${book.image}`
                : null;

              return (
                <tr key={book.id} className="border-t">
                  <td className="p-3">{book.id}</td>
                  <td className="p-3">{book.title}</td>
                  <td className="p-3">{book.author}</td>
                  <td className="p-3">₹{book.price}</td>
                  <td className="p-3">{book.quantity}</td>

                  <td className="p-3">
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        className="w-14 h-20 object-cover rounded cursor-pointer"
                        onClick={() => setPreviewImage(imageUrl)}
                      />
                    ) : (
                      "No Image"
                    )}
                  </td>

                  <td className="p-3">
                    {book.pdf ? (
                      <button
                        onClick={() => handleViewPdf(book.pdf)}
                        className="text-blue-600 underline"
                      >
                        View PDF
                      </button>
                    ) : (
                      "No PDF"
                    )}
                  </td>

                  <td className="p-3 space-x-2">
                    <button
                      onClick={() => handleEdit(book)}
                      className="bg-green-600 text-white px-3 py-1 rounded"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(book.id)}
                      className="bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {previewImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center"
          onClick={() => setPreviewImage(null)}
        >
          <img src={previewImage} className="max-h-[90vh]" />
        </div>
      )}
    </div>
  );
};

export default Books;
