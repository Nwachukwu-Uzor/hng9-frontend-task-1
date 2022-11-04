import React from "react";
import PropTypes from "prop-types";

const Button = ({ textColor, text, bgColor, activeRingColor, id, onClick }) => {
  return (
    <button
      className={`w-full py-2 ${bgColor} ${textColor} ${activeRingColor} text-sm rounded-md hover:opacity-90 font-semibold`}
      onClick={onClick}
      id={id}
    >
      {text}
    </button>
  );
};

Button.prototypes = {
  textColor: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  activeRingColor: PropTypes.string.isRequired,
  id: PropTypes.string,
};

export default Button;
