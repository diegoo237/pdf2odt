import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FileUploader from "../components/FileUploader";
import UploadedFilesArea from "../components/UploadedFilesArea";
import savePdf from "../services/savePdfService";
import {
  convertPdfRequest,
  downloadBlob,
} from "../services/convertPdfRequestService";
import { startFakeProgress } from "../utils/toastUtils";

function ConvertPage() {
  const [pdf, setPdf] = useState([]);
  const [loading, setLoading] = useState();

  async function convertPdf(fileName, type) {
    const toastId = toast("Convertendo... 0%", {
      progress: 0,
      isLoading: true,
      closeOnClick: false,
      closeButton: false,
      autoClose: false,
      hideProgressBar: false,
    });

    const cancelProgress = startFakeProgress(toastId, toast);

    try {
      const blob = await convertPdfRequest(fileName, type);
      cancelProgress();

      downloadBlob(blob, fileName.replace(".pdf", `.${type}`));

      toast.update(toastId, {
        render: "Conversão finalizada!",
        progress: 1,
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });
    } catch (error) {
      cancelProgress();
      console.error(error);
      toast.update(toastId, {
        render: "Ocorreu uma falha ao realizar a conversão",
        type: "error",
        isLoading: false,
        autoClose: 5000,
      });
    }
  }

  function save(file) {
    const toastId = toast.loading("Salvando pdf...");
    setLoading(true);

    savePdf(file)
      .then(() => {
        toast.update(toastId, {
          render: "PDF salvo com sucesso",
          type: "success",
          isLoading: false,
          autoClose: 5000,
        });
      })
      .catch((error) => {
        console.error("Erro:", error);
        toast.update(toastId, {
          render: "Ocorreu uma falha ao salvar o arquivo",
          type: "error",
          isLoading: false,
          autoClose: 5000,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <main className="bg-zinc-700 min-h-screen p-10 flex items-center justify-center ">
      <div className="h-150 gap-4 xl:grid-cols-2 grid grid-cols-1">
        <FileUploader setPdf={setPdf} save={save} />
        <UploadedFilesArea
          pdf={pdf}
          convertPdf={convertPdf}
          loading={loading}
          setPdf={setPdf}
        />
      </div>

      <ToastContainer />
    </main>
  );
}

export default ConvertPage;
