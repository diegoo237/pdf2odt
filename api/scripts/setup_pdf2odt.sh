PDF_INPUT="$1"
SANITIZED_PDF_INPUT="$2"

# Definir diretórios de saída
PDF_DIR="/var/pdf2odt/api/uploads/pdf/$PDF_INPUT"
DOCX_DIR="/var/pdf2odt/api/uploads/docx"
ODT_DIR="/var/pdf2odt/api/uploads/odt"

# Criar pastas se não existirem
mkdir -p "$DOCX_DIR" "$ODT_DIR"

# Ativar o ambiente virtual
source /pdf2docx_env/bin/activate

# Definir caminho de saída para o DOCX
DOCX_OUTPUT="$DOCX_DIR/$(basename "${SANITIZED_PDF_INPUT%.*}.docx")"

# Converter PDF para DOCX na pasta correta
pdf2docx convert "$PDF_DIR" "$DOCX_OUTPUT"

# Converter DOCX para ODT e salvar na pasta odt/
libreoffice --headless --convert-to odt "$DOCX_OUTPUT" --outdir "$ODT_DIR"
mv "$ODT_DIR/$(basename "${DOCX_OUTPUT%.*}.odt")" "$ODT_DIR/$(basename "${PDF_INPUT%.*}.odt")"

echo "Caminho do DOCX: $DOCX_OUTPUT"


