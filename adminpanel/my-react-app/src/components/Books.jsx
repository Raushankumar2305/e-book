import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:8000";

const Books = () => {
  const navigate = useNavigate();

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

  
  // get
  const fetchBooks = async () => {
    const res = await axios.get(`${API_URL}/books`);
    setBooks(res.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  //add
  const handleSaveBook = async () => {
    if (!title || !author || !price || !quantity) {
      alert("All fields are required");
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
        await axios.put(`${API_URL}/books/${editId}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        await axios.post(`${API_URL}/books`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }

      closeModal();
      fetchBooks();
    } catch (err) {
      alert("Failed to save book");
      console.error(err);
    }
  };

// edit
  const handleEdit = (book) => {
    setEditId(book.id);
    setTitle(book.title);
    setAuthor(book.author);
    setPrice(book.price);
    setQuantity(book.quantity);
    setImage(null);
    setPdf(null);
    setShowModal(true);
  };

  // delete
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this book?")) return;
    await axios.delete(`${API_URL}/books/${id}`);
    fetchBooks();
  };

  // pdf
  const handleViewPdf = (pdfPath) => {
    window.open(`${API_URL}/public/${pdfPath}`, "_blank");
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
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Books</h1>

        <button
          onClick={() => setShowModal(true)}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-800"
        >
          + Add Book
        </button>
      </div>

      {/* TABLE */}
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
                ? `${API_URL}/public/${book.image}`
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
                        alt={book.title}
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

            {books.length === 0 && (
              <tr>
                <td colSpan="8" className="p-6 text-center text-gray-500">
                  No books found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-40">
          <div className="bg-white w-96 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">
              {editId ? "Edit Book" : "Add New Book"}
            </h2>

            <input
              type="text"
              placeholder="Book Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border p-2 rounded mb-3"
            />

            <input
              type="text"
              placeholder="Author Name"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full border p-2 rounded mb-3"
            />

            <input
              type="number"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full border p-2 rounded mb-3"
            />

            <input
              type="number"
              placeholder=" Quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-full border p-2 rounded mb-3"
            />

            <input
              type="file"
              placeholder="Select image"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              className="w-full border p-2 rounded mb-3"
            />

            <input
              type="file"
              placeholder="Select PDF"
              accept="application/pdf"
              onChange={(e) => setPdf(e.target.files[0])}
              className="w-full border p-2 rounded mb-4"
            />

            <div className="flex justify-end gap-3">
              <button
                onClick={closeModal}
                className="px-4 py-2 border rounded hover:bg-red-500 hover:text-white"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveBook}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-800"
              >
                {editId ? "Update" : "Add"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* IMAGE PREVIEW */}
      {previewImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setPreviewImage(null)}
        >
          <img
            src={previewImage}
            alt="Preview"
            className="max-h-[90vh] max-w-[90vw] rounded"
          />
        </div>
      )}
    </div>
  );
};

export default Books;
