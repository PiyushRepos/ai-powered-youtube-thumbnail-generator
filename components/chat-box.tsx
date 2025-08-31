"use client";
import { ArrowUp, ImageIcon, Upload } from "lucide-react";
import { Button } from "./ui/button";
import React, { useState } from "react";
import Image from "next/image";

type Props = {
  handleSubmit?: (
    message: string,
    event?:
      | React.FormEvent<HTMLFormElement>
      | React.KeyboardEvent<HTMLTextAreaElement>
  ) => void;
};

const ChatBox = ({ handleSubmit }: Props) => {
  const [message, setMessage] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [image, setImage] = useState<File | null>(null);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSubmit?.(message, event);
      setMessage("");
    }
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSubmit?.(message, event);
    setMessage("");
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
      div
      {image && (
        <div>
          <div>
            <Image
              src={URL.createObjectURL(image || new Blob())}
              width={20}
              height={20}
              alt="Uploaded Image"
              className="h-10 w-10 rounded-md"
            />
          </div>
        </div>
      )}
      <form
        onSubmit={handleFormSubmit}
        className="bg-neutral-100 p-2 rounded-3xl max-w-3xl mx-auto mb-4"
      >
        <textarea
          onKeyDown={handleKeyDown}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message here..."
          rows={2}
          className="outline-0 w-full resize-none p-2 text-base"
        />
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
              <label htmlFor="image-upload">
                <Button type="button" size="icon" variant="ghost" asChild>
                  <ImageIcon className="text-neutral-600 hover:text-neutral-800 h-5 w-5" />
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
