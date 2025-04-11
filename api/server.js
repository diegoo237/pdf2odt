import app from "./app.js";

process.env.LANG = "en_US.UTF-8";

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
