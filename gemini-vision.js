// Arquiivo para IA fazer identificação de imagens

import dotenv from "dotenv";
import * as fs from "fs";
import { GoogleGenerativeAI } from '@google/generative-ai';

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

function fileToGenerativePart(path, mimeType) {
    return {
        inlineData: {
            data: Buffer.from(fs.readFileSync(path)).toString("base64"),
            mimeType,
        }
    }
}


async function run() {
    const model = genAI.getGenerativeModel({model: "gemini-2.5-flash-lite"});

    const prompt = "Give me a description of this image and tell me what do you know about this";
    
    const imageParts = [fileToGenerativePart("Inter.jpg", "image/jpeg")]

    const result = await model.generateContent([prompt, ...imageParts]);
    const response = await result.response;
    const text = response.text();
    console.log(text)
}

run();


