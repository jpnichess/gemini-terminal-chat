# Integração com a API Google Gemini (Node.js)

Este repositório contém exemplos práticos de como manipular a **API do Google Gemini** usando Node.js.  
Foram criados scripts que demonstram desde a comunicação inicial até funcionalidades de chat, streaming de resposta e reconhecimento de imagens.

---

## 📂 Estrutura do Projeto

- **`gemini-start.js`**  
  Faz apenas a verificação inicial imprimindo no console que a comunicação com a API foi estabelecida com sucesso.

- **`gemini-sent-prompt.js`**  
  Envia um prompt para a API e imprime a resposta recebida.

- **`gemini-chat.js`**  
  Cria um chat simples via terminal, onde o usuário envia uma mensagem e recebe a resposta do modelo (fluxo estático).

- **`gemini-streaming.js`**  
  Exemplo de streaming: a API vai retornando partes da resposta conforme “pensa”.

- **`gemini-vision.js`**  
  Envia uma imagem (local ou via URL) para a API e retorna a identificação/descrição feita pelo modelo.

---

## ⚙️ Configuração

`Crie um arquivo .env na raiz do projeto com suas credenciais:`
  
  GEMINI_API_KEY=your_api_key_here

---

## 🛠️ Requisitos

- [Node.js 18+](https://nodejs.org/)
- Dependências:
  - `axios`
  - `dotenv`
  - `readline-sync` (para o chat no terminal)

Instale tudo com:

```bash
git clone https://github.com/jpnichess/gemini-terminal-chat.git
cd gemini-terminal-chat/
npm install
node gemini-streaming.js

