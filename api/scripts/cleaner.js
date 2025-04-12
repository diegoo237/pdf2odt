import fs from "fs";
import path from "path";
import cron from "node-cron";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const pastasParaLimpar = [
  path.join(__dirname, "../uploads/pdf"),
  path.join(__dirname, "../uploads/odt"),
  path.join(__dirname, "../uploads/docx"),
];

cron.schedule("0 * * * *", () => {
  console.log(`[${new Date().toLocaleTimeString()}] Iniciando limpeza...`);

  pastasParaLimpar.forEach((pasta) => {
    console.log(`📁 Limpando a pasta: ${pasta}`);

    fs.readdir(pasta, (err, arquivos) => {
      if (err) {
        return console.error("❌ Erro ao ler a pasta:", pasta, err);
      }

      arquivos.forEach((nome) => {
        const caminho = path.join(pasta, nome);
        fs.stat(caminho, (err, stats) => {
          if (err) {
            console.error("⚠️ Erro ao acessar:", caminho, err);
            return;
          }

          console.log(
            `→ Encontrado: ${nome} (${
              stats.isDirectory() ? "pasta" : "arquivo"
            })`
          );

          const idadeLimiteEmMs = 1000 * 60 * 30;
          const agora = Date.now();

          if (agora - stats.mtimeMs > idadeLimiteEmMs) {
            fs.rm(caminho, { recursive: true, force: true }, (err) => {
              if (err)
                return console.error("❌ Erro ao deletar:", caminho, err);
              console.log("✔ Removido:", caminho);
            });
          } else {
            console.log("⏳ Ainda recente, não será removido:", nome);
          }
        });
      });
    });
  });
});
