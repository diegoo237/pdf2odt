import express from "express";
import multer from "multer";
import path from "path";
import { Buffer } from "buffer";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const uploadDir = path.join(__dirname, "../uploads/pdf");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const utf8Name = Buffer.from(file.originalname, "latin1").toString("utf8");
    cb(null, utf8Name);
  },
});

const upload = multer({ storage });

const router = express.Router();

router.post("/save-pdf", upload.array("files", 20), (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ error: "Nenhum arquivo enviado" });
  }

  const filesInfo = req.files.map((file) => ({
    fileName: file.filename,
    filePath: file.path,
  }));

  res.json({
    message: "PDFs salvos com sucesso!",
    files: filesInfo,
  });
});

export default router;
