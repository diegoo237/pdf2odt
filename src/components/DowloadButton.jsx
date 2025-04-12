import { FaDownload } from "react-icons/fa";

function DowloadButton({ pdf, convertPdf, loading, type }) {
  return (
    <button
      onClick={() => convertPdf(pdf.name, type)}
      disabled={loading}
      className={`cursor-pointer h-fit w-fit justify-self-end px-4 py-2 rounded-lg font-medium shadow-sm flex items-center gap-2 hover:bg-green-300 transition duration-400 ease-in-out ${
        loading
          ? "bg-gray-400 text-gray-700 cursor-not-allowed"
          : "bg-blue-100 text-blue-700"
      } ${type === "odt" ? "trigger" : ""}`}
    >
      {!loading && <FaDownload />}
      {loading ? "Aguarde..." : type}
    </button>
  );
}

export default DowloadButton;
