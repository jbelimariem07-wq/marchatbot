// // import{configuration,OpenAIapi}from" openai";
// // import dotenv from'otenv';
// // dotenv.config();
// // const configuration =new configuration({apiKey:process.env.OPEN-IA-KEY});
// // const openai = new OpenAIapi(configuration);
// // async function main() {
// //   console.log(colors.bold.green('Welcome to the Chatbot Program!'));
// //   console.log(colors.bold.green('You can start chatting with the bot.'));

// //   const chatHistory = []; // Store conversation history

// //   while (true) {
// //     const userInput = readlineSync.question(colors.yellow('You: '));

// //     try {
// //       // Construct messages by iterating over the history
// //       const messages = chatHistory.map(([role, content]) => ({
// //         role,
// //         content,
// //       }));

// //       // Add latest user input
// //       messages.push({ role: 'user', content: userInput });

// //       // Call the API with user input & history
// //       const completion = await openai.createChatCompletion({
// //         model: 'gpt-3.5-turbo',
// //         messages: messages,
// //       });

// //       // Get completion text/content
// //       const completionText = completion.data.choices[0].message.content;

// //       if (userInput.toLowerCase() === 'exit') {
// //         console.log(colors.green('Bot: ') + completionText);
// //         return;
// //       }

// //       console.log(colors.green('Bot: ') + completionText);

// //       // Update history with user input and assistant response
// //       chatHistory.push(['user', userInput]);
// //       chatHistory.push(['assistant', completionText]);
// //     } catch (error) {
// //       if (error.response) {
// //         console.error(colors.red(error.response.data.error.code));
// //         console.error(colors.red(error.response.data.error.message));
// //         return;
// //       }
// //       console.error(colors.red(error));
// //       return;
// //     }
// //   }
// // }

// // main();
// import openai from './config/open-ai.js';
// import readlineSync from 'readline-sync';
// import colors from 'colors';

// async function main() {
//   console.log(colors.bold.green('Welcome to the Chatbot Program!'));
//   console.log(colors.bold.green('You can start chatting with the bot.'));

//   const chatHistory = []; // Store conversation history

//   while (true) {
//     const userInput = readlineSync.question(colors.yellow('You: '));

//     try {
//       // Construct messages by iterating over the history
//       const messages = chatHistory.map(([role, content]) => ({
//         role,
//         content,
//       }));

//       // Add latest user input
//       // messages.push({ role: 'user', content: userInput });

//       // // Call the API with user input & history
//       // const completion = await openai.chat.completions.create({
//       //   model: 'llama-3.3-70b-versatile',
//       //   messages: messages,
//       // });

//       // // Get completion text/content
//       // const completionText = completion.choices[0].message.content;
// const completion = await openai.chat.completions.create({
//   model: 'llama-3.3-70b-versatile',
//   messages: messages,
// });

// const completionText = completion.choices[0].message.content;
//       if (userInput.toLowerCase() === 'exit') {
//         console.log(colors.green('Bot: ') + completionText);
//         return;
//       }

//       console.log(colors.green('Bot: ') + completionText);

//       // Update history with user input and assistant response
//       chatHistory.push(['user', userInput]);
//       chatHistory.push(['assistant', completionText]);
//     } catch (error) {
//       if (error.response) {
//         console.error(colors.red(error.response.data.error.code));
//         console.error(colors.red(error.response.data.error.message));
//         return;
//       }
//       console.error(colors.red(error));
//       return;
//     }
//   }
// }

// main();
//jjjjjj
// import openai from './config/open-ai.js';
// import readlineSync from 'readline-sync';
// import colors from 'colors';

// async function main() {

//   console.log(colors.bold.green('Welcome to the Chatbot Program!'));
//   console.log(colors.bold.green('You can start chatting with the bot.'));

//   const chatHistory = [];

//   while (true) {

//     const userInput = readlineSync.question(
//       colors.yellow('You: ')
//     );

//     if (!userInput) continue;

//     try {

//       const messages = [
//         ...chatHistory,
//         {
//           role: "user",
//           content: userInput,
//         },
//       ];

//       const completion =
//         await openai.chat.completions.create({
//           model: "llama-3.3-70b-versatile",
//           messages: messages,
//         });

//       const completionText =
//         completion.choices[0].message.content;

//       console.log(
//         colors.green('Bot: ') + completionText
//       );

//       chatHistory.push({
//         role: "user",
//         content: userInput,
//       });

//       chatHistory.push({
//         role: "assistant",
//         content: completionText,
//       });

//     } catch (error) {

//       console.log(error);

//     }

//   }

// }

// main();
//vvv
// import express from "express";
// import cors from "cors";
// import openai from "./config/open-ai.js";

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.post("/chat", async (req, res) => {
//   try {
//     const userMessage = req.body.message;

//     const completion = await openai.chat.completions.create({
//       model: "llama-3.3-70b-versatile",
//       messages: [
//         { role: "user", content: userMessage }
//       ],
//     });

//     const botReply = completion.choices[0].message.content;

//     res.json({ reply: botReply });

//   } catch (error) {
//     res.status(500).json({ error: "Server error" });
//   }
// });

// app.listen(3000, () => {
//   console.log("Server running on http://localhost:3000");
// });





import express from "express";
import cors from "cors";
import openai from "./config/open-ai.js";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
app.use(cors());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// serve html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// chatbot API
app.post("/chat", async (req, res) => {
  try {
    const userMessage = req.body.message;

    const completion = await openai.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        { role: "user", content: userMessage }
      ],
    });

    res.json({
      reply: completion.choices[0].message.content
    });

  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});