"use client";
import BotBubble from "@/components/bot-bubble";
import ChatBox from "@/components/chat-box";
import UserBubble from "@/components/user-bubble";

const Chat = () => {
  const handleSubmit = async (message: string) => {
    console.log("User message:", message);
  };
  return (
    <div className="container max-w-3xl mx-auto min-h-screen p-4">
      <div className="pb-40 pt-10">
        <UserBubble text="Hi, How are you?" />
        <BotBubble text="I'm good, thank you! How can I assist you today?" />
      </div>

      <ChatBox handleSubmit={handleSubmit} />
    </div>
  );
};

export default Chat;
