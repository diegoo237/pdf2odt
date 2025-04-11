import { useDropzone } from "react-dropzone";
import { HiUpload } from "react-icons/hi";

function FileUploader({ setPdf, save }) {
  const { getRootProps, getInputProps } = useDropzone({
    accept: { "application/pdf": [] },
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 20) {
        alert("Você só pode enviar no máximo 20 arquivos de uma vez.");
      } else {
        parseName(acceptedFiles);
      }
    },
  });

  function parseName(acceptedFiles) {
    const parsedArray = acceptedFiles.map((element) => {
      const newName = Date.now() + "-" + element.name.replace(/\s+/g, "-");
      return new File([element], newName, { type: element.type });
    });

    setPdf((prevPreview) => [...prevPreview, ...parsedArray]);
    save(parsedArray);
  }

  return (
    <div className="bg-white rounded-lg shadow-md flex p-4 ">
      <div
        {...getRootProps()}
        className="flex flex-col items-center justify-center p-30 border-dashed border-4 border-blue-500 rounded-lg p-8 text-center cursor-pointer hover:border-blue-800 transition duration-300 ease-in-out "
      >
        <input {...getInputProps()} />
        <HiUpload className="mx-auto text-blue-500 text-5xl mb-4" />
        <p className="text-gray-700 text-lg font-medium">
          Arraste e solte seu PDF aqui, ou clique para selecionar.
        </p>
      </div>
    </div>
  );
}

export default FileUploader;
