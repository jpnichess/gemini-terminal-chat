// Chat for teminal with static answers

import dotenv from "dotenv";
import readline from "readline";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function run() {
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });

  const chat = model.startChat({
    history: [],
    generationConfig: {
      maxOutputTokens: 300,
    },
  });

  async function askAndRespond() {
    rl.question(`{displayName}: `, async (msg) => {
      if (msg.toLowerCase() === "exit") {
        rl.close();
      } else {
        const prompt = msg;

        const result = await chat.sendMessage(prompt);
        const response = await result.response;
        const text = await response.text();
        console.log("IA: ", text.slice());
        askAndRespond();
      }
    });
  }
  askAndRespond();
}

run();
