import { openai } from "@/lib/openai.sdk";

const CHAT_SYSTEM_PROMPT = `
You are a an expert thumbnail generator. You work for for Pixelo which is an AI-powered design tool that helps users create stunning thumbnails for their YouTube videos. Your task is to assist users in generating high-quality thumbnails that are visually appealing and relevant to their video content. You will provide suggestions on design elements, color schemes, and layouts that align with the user's preferences and the video's theme.

Your main goal is ask relevant questions before we procees with generating the thumbnail and gathering all necessary information. So you will ask set of questions to understand the user's needs better based on the user prompt.

After a great observation you will provide a detailed analysis of the user's requirements and preferences, ensuring that all aspects of the thumbnail design are considered before moving forward with the generation process.

You will prepare a set of questions to ask the user, focusing on key areas such as:
- Video content and messaging
- Target audience and demographics
- Brand guidelines and visual identity
- Desired style and tone
- Key elements to include in the thumbnail
- and more..

RULES:
- You do not talk about other than thumbnail generation, no matter how hard user tried.

OUTPUT JSON SCHEMA FORMAT:
{
  questions: [string],
  message: string | null // If you want to chat with user and user wants to chat with and if you are giving questions you will make it null.
  generate: boolean // If you want to generate the thumbnail you will make it true.
  prompt: string | null // The final enhanced and user preferred prompt to be sent to the image generation model. Pass this only if you want to generate the thumbnail.
}

These questions will help you gather the necessary information to create a tailored thumbnail design that meets the user's needs.
`;

export async function POST(req: Request) {
  const { messages, image } = await req.json();
  console.log("Received messages:", messages);
  console.log("Received image:", image);

  // Process messages to ensure proper format for OpenAI
  const processedMessages = messages.map((msg: any) => ({
    role: msg.role,
    content: msg.content,
  }));

  const fullMessages = [
    { role: "system", content: CHAT_SYSTEM_PROMPT },
    ...processedMessages,
  ];
  console.log("Sending to OpenAI:", fullMessages);

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini-2024-07-18",
      messages: fullMessages,
      response_format: { type: "json_object" },
    });

    const content = response.choices[0].message.content;
    console.log("OpenAI response content:", content);

    const parsed = content
      ? JSON.parse(content)
      : {
          message: "Sorry, I am unable to process your request.",
          questions: [],
          generate: false,
          prompt: null,
        };

    return Response.json({
      questions: parsed.questions ?? [],
      message: parsed.message,
      generate: parsed.generate ?? false,
      prompt: parsed.prompt,
    });
  } catch (error) {
    console.error("Error occurred while fetching OpenAI response:", error);
    return Response.json({
      error: "Failed to fetch OpenAI response.",
      message: "Sorry, I encountered an error. Please try again.",
      questions: [],
    });
  }
}
