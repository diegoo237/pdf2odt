import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { exec } from "child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const router = express.Router();

router.post("/convert-pdf-docx", (req, res) => {
  const scriptPath = path.resolve(__dirname, "../scripts/setup_pdf2docx.sh");
  const pdfInput = req.body.fileName;

  const command = `bash ${scriptPath} "${pdfInput}"`;
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Erro ao executar o script: ${stderr}`);
      return res.status(500).json({ error: "Erro ao executar o script." });
    }
    const convertedFilePath = `/var/pdf2odt/api/uploads/docx/${pdfInput.replace(
      ".pdf",
      ".docx"
    )}`;

    res.download(convertedFilePath, (err) => {
      if (err) {
        console.error("Erro ao enviar o arquivo:", err);
        return res.status(500).json({ error: "Erro ao enviar o arquivo." });
      }
    });
  });
});

router.post("/convert-pdf-odt", (req, res) => {
  const scriptPath = path.resolve(__dirname, "../scripts/setup_pdf2odt.sh");

  const pdfInput = req.body.fileName;
  const SanitizedPdfInput = pdfInput.replace(/[^a-zA-Z0-9-_.]/g, "");

  const command = `bash ${scriptPath} "${pdfInput}" "${SanitizedPdfInput}"`;
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Erro ao executar o script: ${stderr}`);
      return res.status(500).json({ error: "Erro ao executar o script." });
    }
    const convertedFilePath = `/var/pdf2odt/api/uploads/odt/${pdfInput.replace(
      ".pdf",
      ".odt"
    )}`;
    res.download(convertedFilePath, (err) => {
      if (err) {
        console.error("Erro ao enviar o arquivo:", err);
        return res.status(500).json({ error: "Erro ao enviar o arquivo." });
      }
    });
  });
});

export default router;
