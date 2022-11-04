import React from "react";
import PropTypes from "prop-types";

const Paragraph = ({ text, className }) => {
  return (
    <p className={`my-2 text-[18px] lg:text-[20px] ${className}`}>{text}</p>
  );
};

Paragraph.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Paragraph;
