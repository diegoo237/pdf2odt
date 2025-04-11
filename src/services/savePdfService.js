async function savePdf(files) {
  const formData = new FormData();

  files.forEach((file) => {
    formData.append("files", file);
  });

  const response = await fetch(
    "http://localhost:9002/frontControllerSave/save-pdf",
    {
      method: "POST",
      body: formData,
    }
  );

  if (!response.ok) {
    throw new Error(`Erro ao salvar o arquivo: ${response.statusText}`);
  }

  return await response.json();
}

export default savePdf;
