import UploadedFIle from "./UploadedFIle";
import { HiTrash } from "react-icons/hi";
import { FaDownload } from "react-icons/fa";
import { HiOutlineExclamationCircle } from "react-icons/hi";

function UploadedFilesArea({ pdf, convertPdf, loading, setPdf }) {
  return (
    <main
      className={`${
        pdf.length === 0 && "justify-center"
      } bg-white flex flex-col p-4 gap-2 items-center rounded-lg shadow-md overflow-y-auto  `}
    >
      {pdf.length > 0 ? (
        <div className="self-start flex gap-2">
          <button
            onClick={() => setPdf([])}
            className="cursor-pointer h-fit w-fit px-2 py-2 rounded-md font-medium shadow-sm flex items-center gap-2 bg-gray-300 text-gray-800 hover:bg-red-300 transition duration-400 ease-in-out"
          >
            <HiTrash className="text-lg" />
            <p>Limpar</p>
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center p-8 text-center">
          <HiOutlineExclamationCircle className="text-blue-500 text-5xl mb-4" />
          <p className="text-gray-700 text-lg font-medium ">
            Nenhum arquivo selecionado.
            <br />
            Por favor, envie um PDF usando o campo à
            <span className="xl:hidden"> cima</span>
            <span className="hidden xl:block"> esquerda</span>
          </p>
        </div>
      )}

      {pdf.map((pdfFile, index) => (
        <UploadedFIle
          key={index}
          pdf={pdfFile}
          convertPdf={convertPdf}
          loading={loading}
        />
      ))}
    </main>
  );
}

export default UploadedFilesArea;
