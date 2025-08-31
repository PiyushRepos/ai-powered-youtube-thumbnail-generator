import React from "react";

type Props = {
  text: string;
};

const UserBubble = ({ text }: Props) => {
  return (
    <div className="my-6 bg-neutral-100 dark:bg-neutral-800 dark:text-white p-3 px-4 rounded-xl ml-auto max-w-fit">
      {text}
    </div>
  );
};

export default UserBubble;
