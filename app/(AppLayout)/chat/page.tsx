"use client";
import BotBubble from "@/components/bot-bubble";
import ChatBox from "@/components/chat-box";
import UserBubble from "@/components/user-bubble";
import { useState } from "react";
import axios from "axios";

type Message = {
  id: number;
  text: string;
  role: "user" | "assistant";
  questions?: string[];
};

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSubmit = async (message: string, image?: File | null) => {
    if (!message.trim()) return;

    // Add user message immediately
    const newUserMessage: Message = {
      id: Date.now(),
      text: message,
      role: "user",
    };

    const updatedMessages = [...messages, newUserMessage];
    setMessages(updatedMessages);

    try {
      // Prepare messages for API in correct format
      const messageArray = updatedMessages.map((msg) => ({
        role: msg.role,
        content:
          msg.role === "user"
            ? msg.text
            : msg.questions && msg.questions.length > 0
            ? `Questions: ${msg.questions.join(", ")}`
            : msg.text,
      }));

      const response = await axios.post("/api/chat", {
        messages: messageArray,
        image: image ? await image.arrayBuffer() : null,
      });

      if (response.status === 200) {
        console.log("Server response:", response.data);
        const {
          message: responseMessage,
          questions,
          generate,
          prompt,
        } = response.data;

        if (generate === true) {
          // Generate the thumbnail using the prompt
        }

        // Create assistant response
        const assistantMessage: Message = {
          id: Date.now() + 1,
          text: responseMessage || "",
          role: "assistant",
          questions: questions && questions.length > 0 ? questions : undefined,
        };

        setMessages((prev) => [...prev, assistantMessage]);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage: Message = {
        id: Date.now() + 1,
        text: "Sorry, I encountered an error. Please try again.",
        role: "assistant",
      };
      setMessages((prev) => [...prev, errorMessage]);
    }
  };
  return (
    <div className="container max-w-3xl mx-auto min-h-screen p-4">
      <div className="pb-40 pt-10">
        {messages.map((msg) =>
          msg.role === "user" ? (
            <UserBubble key={msg.id} text={msg.text} />
          ) : msg.role === "assistant" &&
            (!msg.questions || msg.questions.length === 0) ? (
            <BotBubble key={msg.id} text={msg.text} />
          ) : msg.role === "assistant" &&
            msg.questions &&
            msg.questions.length > 0 ? (
            <BotBubble key={msg.id} text={msg.text} questions={msg.questions} />
          ) : null
        )}
      </div>

      <ChatBox handleSubmit={handleSubmit} />
    </div>
  );
};

export default Chat;
