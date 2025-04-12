PDF_INPUT="$1"

# Definir diretórios de saída
PDF_DIR="/var/pdf2odt/api/uploads/pdf/$PDF_INPUT"
DOCX_DIR="/var/pdf2odt/api/uploads/docx"

# Criar pastas se não existirem
mkdir -p "$DOCX_DIR" "$ODT_DIR"

# Ativar o ambiente virtual
source /pdf2docx_env/bin/activate

# Definir caminho de saída para o DOCX
DOCX_OUTPUT="$DOCX_DIR/$(basename "${PDF_INPUT%.*}.docx")"

# Converter PDF para DOCX na pasta correta
pdf2docx convert "$PDF_DIR" "$DOCX_OUTPUT"