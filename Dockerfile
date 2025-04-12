FROM node:18

RUN echo "Atualizando pacotes do sistema..." && \
apt-get update -y

RUN echo "Instalando Python 3, venv e pip..." && \
apt-get install -y python3 python3-venv python3-pip

RUN echo "Instalando LibreOffice..." && \
apt-get install -y libreoffice

RUN echo "Criando ambiente virtual..." && \
python3 -m venv /pdf2docx_env

RUN echo "Instalando pdf2docx..." && \
/pdf2docx_env/bin/pip install pdf2docx

ENV PATH="/pdf2docx_env/bin:$PATH"

WORKDIR /var/pdf2odt
