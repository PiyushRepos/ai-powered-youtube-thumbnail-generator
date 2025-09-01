import React from "react";

type Props = {
  text: string;
  questions?: string[];
};

const BotBubble = ({ text, questions }: Props) => {
  return (
    <div className="max-w-fit">
      {text}
      {questions && questions.length > 0 && (
        <ul className="list-disc list-inside mt-2 prose dark:prose-invert">
          {questions.map((q, index) => (
            <li key={index}>{q}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BotBubble;
