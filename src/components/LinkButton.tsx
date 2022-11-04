import React from "react";
import PropTypes from "prop-types";

const LinkButton = ({ id, displayText, to }) => {
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

LinkButton.propTypes = {
  id: PropTypes.string.isRequired,
  displayText: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default LinkButton;
