import { useParams, useNavigate } from "react-router-dom";

const PdfViewer = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const pdfUrl = `http://localhost:8000/books/${id}/pdf`;

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-semibold bg-liner-to-r from-blue-400 to-blue-900 text-black">Book PDF Viewer</h1>

        <div className="space-x-3">
          <button
            onClick={() => window.open(pdfUrl, "_blank")}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Download PDF
          </button>

          <button
            onClick={() => navigate(-1)}
            className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
          >
            Back
          </button>
        </div>
      </div>

      {/*pdfview */}
      <div className="border rounded shadow h-[80vh]">
        <iframe
          src={pdfUrl}
          title="PDF Viewer"
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default PdfViewer;
