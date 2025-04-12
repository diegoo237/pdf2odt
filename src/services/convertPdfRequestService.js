export async function convertPdfRequest(fileName, type) {
  const response = await fetch(
    `http://localhost:9002/frontControllerConvert/convert-pdf-${type}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fileName }),
    }
  );

  if (!response.ok) {
    throw new Error(`Erro na conversão: ${response.statusText}`);
  }

  const blob = await response.blob();
  return blob;
}

export function downloadBlob(blob, fileName) {
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  a.click();
}
