// IA Generativa com prompt escrito diretamente no código

import dotenv from "dotenv";
import { GoogleGenerativeAI } from '@google/generative-ai';

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function run() {
    const model = genAI.getGenerativeModel({model: "gemini-2.5-flash-lite"});

    const prompt = 
    
    "Escreva para mim sobre o Inter, maior clube do Brasil.";

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
}

run();
