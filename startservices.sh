#!/bin/bash

# Exibindo mensagens coloridas no terminal
echo -e "\e[32;41mIniciando pdf2odt\e[0m"

# Mostra a versão do Node.js
echo -e "\e[32;41mVersão do NodeJs\e[0m"
node -v

# Exibe o nome de usuário
echo -e "\e[32;41mSeu nome de usuário é:\e[0m"
whoami

# Exibe o diretório de onde o script está sendo executado
echo -e "\e[32;41mO script está executando do diretório:\e[0m"
pwd

# Inicia o backend Express em background
echo -e "\e[32;41mIniciando serviço Express em background\e[0m"
cd /var/pdf2odt/api
npm start &

# Aguarda um tempo para o backend iniciar antes de iniciar o frontend
echo -e "\e[32;41mAguardando 5 segundos para iniciar React/Vite em primeiro plano\e[0m"
sleep 5

# Inicia o frontend (Vite) em primeiro plano
echo -e "\e[32;41mIniciando serviço React/Vite\e[0m"
cd /var/pdf2odt/src
npm run dev -- --host 0.0.0.0
