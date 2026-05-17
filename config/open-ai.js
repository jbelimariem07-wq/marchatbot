// import { Configuration, OpenAIApi } from 'openai';
// import dotenv from 'dotenv';
// dotenv.config();

// const configuration = new Configuration({
//   apiKey: process.env.OPENIAKEY,
// });

// const openai = new OpenAIApi(configuration);

// export default openai;
import Groq from "groq-sdk";
import dotenv from "dotenv";

dotenv.config();

const openai = new Groq({
  apiKey: process.env.OPENIAKEY,
});

export default openai;