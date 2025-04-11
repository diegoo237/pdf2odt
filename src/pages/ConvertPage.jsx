import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import FileUploader from "../components/FileUploader";

import savePdf from "../services/savePdfService";

function ConvertPage() {
  const [pdf, setPdf] = useState([]);
  const [loading, setLoading] = useState();

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
    <main className="bg-gray-600 min-h-screen p-10 flex items-center justify-center ">
      <div className="h-150 gap-4 xl:grid-cols-2 grid grid-cols-1">
        <FileUploader setPdf={setPdf} save={save} />
      </div>

      <ToastContainer />
    </main>
  );
}
export default ConvertPage;
