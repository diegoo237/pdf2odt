import DowloadButton from "./DowloadButton";
import FileLabel from "./FileLabel";

function UploadedFile({ pdf, convertPdf, loading }) {
  const expirado = Date.now() > pdf.lastModified + 30 * 60 * 1000;

  if (expirado) {
    return null;
  }

  const formatFileSize = (bytes) => {
    return `${(bytes / 1024).toFixed(2)} KB`;
  };

  const getFileType = (type) => {
    return type.split("/")[1].toUpperCase();
  };

  const getFileName = (name) => {
    const index = name.indexOf("-");
    return index !== -1 ? name.substring(index + 1) : name;
  };

  const checkFileDuration = (lastModified) => {
    const timeDifference = lastModified + 30 * 60 * 1000;
    const expirationTime = new Date(timeDifference).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    return `Disponível até ${expirationTime}`;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] w-full max-w-2xl  p-4 border-b border-gray-300 gap-4">
      <div className="max-w-80 p-2 ">
        <h1 className="font-extrabold text-gray-800 break-words">
          {getFileName(pdf.name)}
        </h1>
        <div className="flex gap-2">
          <FileLabel option={"box"} label={getFileType(pdf.type)} />
          <FileLabel
            option={"box"}
            label={checkFileDuration(pdf.lastModified)}
          />
          <FileLabel label={formatFileSize(pdf.size)} />
        </div>
      </div>
      <div className="flex gap-3 items-center">
        <DowloadButton
          pdf={pdf}
          convertPdf={convertPdf}
          loading={loading}
          type="docx"
        />
        <DowloadButton
          pdf={pdf}
          convertPdf={convertPdf}
          loading={loading}
          type="odt"
        />
      </div>
    </div>
  );
}

export default UploadedFile;
