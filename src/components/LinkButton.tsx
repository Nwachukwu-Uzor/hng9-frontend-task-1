import React from "react";

interface props {
  id: string;
  displayText: string;
  to: string;
}

const LinkButton = ({ id, displayText, to }: props): JSX.Element => {
  return (
    <a
      href={to}
      id={id}
      className="w-full bg-[#EAECF0] font-semibold rounded-md py-6 text-center hover:opacity-75 duration-300"
      target="_blank"
    >
      {displayText}
    </a>
  );
};

export default LinkButton;
