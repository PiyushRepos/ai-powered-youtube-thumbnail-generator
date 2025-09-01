"use client";
import { ArrowUp, ImageIcon, Upload } from "lucide-react";
import { Button } from "./ui/button";
import React, { useState } from "react";
import Image from "next/image";

type Props = {
  handleSubmit?: (
    message: string,
    image?: File | null,
    event?:
      | React.FormEvent<HTMLFormElement>
      | React.KeyboardEvent<HTMLTextAreaElement>
  ) => void;
};

const ChatBox = ({ handleSubmit }: Props) => {
  const [input, setInput] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      if (input.trim()) {
        handleSubmit?.(input, image, event);
        setInput("");
        setImage(null);
      }
    }
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (input.trim()) {
      handleSubmit?.(input, image, event);
      setInput("");
      setImage(null);
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);
      console.log(file);
    }
  };

  return (
    <div className="fixed inset-x-0 bottom-0 bg-white">
      <form
        onSubmit={handleFormSubmit}
        className="bg-zinc-100 p-2 rounded-3xl max-w-3xl mx-auto mb-4 relative"
      >
        <textarea
          onKeyDown={handleKeyDown}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message here..."
          rows={2}
          className="outline-0 w-full resize-none p-2 text-base"
        />
        {image && (
          <div className="absolute -top-12 left-0 flex items-center space-x-2 p-2 rounded-md bg-white shadow-sm border">
            <Image
              src={URL.createObjectURL(image)}
              width={24}
              height={24}
              alt="Uploaded Image"
              className="h-6 w-6 object-cover rounded-md"
            />
            <p className="text-sm text-neutral-600 truncate text-ellipsis w-32">
              {image.name}
            </p>
            <button
              type="button"
              onClick={() => setImage(null)}
              className="text-neutral-400 hover:text-neutral-600 ml-1 text-lg leading-none"
            >
              ×
            </button>
          </div>
        )}
        <div className="flex justify-between items-end px-1">
          <div>
            <div>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                id="image-upload"
                className="hidden"
              />
              <label htmlFor="image-upload" className="cursor-pointer">
                <Button type="button" size="icon" variant="ghost" asChild>
                  <span>
                    <ImageIcon className="text-neutral-600 hover:text-neutral-800 h-5 w-5" />
                  </span>
                </Button>
              </label>
            </div>
          </div>
          <div>
            <Button
              type="submit"
              size="icon"
              className="rounded-full"
              variant="outline"
            >
              <ArrowUp />
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ChatBox;
