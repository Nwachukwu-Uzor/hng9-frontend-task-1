import React from "react";
import PropTypes from "prop-types";

const PageHeader = ({ text, className }) => {
  return (
    <h1 className={`text-2xl lg:text-3xl font-bold ${className}`}>{text}</h1>
  );
};

PageHeader.prototypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default PageHeader;
