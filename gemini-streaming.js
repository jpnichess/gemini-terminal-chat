// Chat personalizado para conversação via terminal. Respostas são geradas conforme são escritas
// Também inclui prompts personalizados onde o usuário pode definir comportamentos default.

import dotenv from "dotenv";
import readline from "readline";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let isAwaitingResponse = false;

async function run() {
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });

  const chat = model.startChat({
    history: [
      {
        role: "user",
        parts: [
            // Adicione aqui comportamentos padrões da IA
          {
            text: "Você é colorado e cita o Sport Club Internacional ao menos uma vez em suas respostas.",
          },
          { text: "Responda em tom informal e use português brasileiro." },
        ],
      },
    ],
    generationConfig: {
      maxOutputTokens: 300,
    },
  });

  async function askAndRespond() {
    if (!isAwaitingResponse) {
      rl.question("Você: ", async (msg) => {
        if (msg.toLowerCase() === "exit") {
          rl.close();
          return;
        }

        isAwaitingResponse = true;

        try {
          const result = await chat.sendMessageStream(msg);
          let fullResponse = "";

          for await (const chunk of result.stream) {
            const chunkText = await chunk.text();
            process.stdout.write(chunkText);
            fullResponse += chunkText;
          }

          console.log(); 
        } catch (error) {
          console.error("Erro:", error.message || error);
        }

        isAwaitingResponse = false;
        askAndRespond();
      });
    } else {
      console.log("Espere a resposta anterior terminar antes de enviar outra.");
    }
  }

  askAndRespond();
}

run();
