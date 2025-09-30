// Primeiro teste Google Gemini API

import dotenv from "dotenv";
import { GoogleGenerativeAI } from '@google/generative-ai';

dotenv.config();

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
    throw new Error('Chave da API não está definida.');
}

const genAI = new GoogleGenerativeAI(apiKey);
console.log('Comunicação com IA feita com sucesso!');
