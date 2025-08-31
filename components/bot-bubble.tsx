import React from "react";

type Props = {
  text: string;
};

const BotBubble = ({ text }: Props) => {
  return <div className="max-w-fit">{text}</div>;
};

export default BotBubble;
