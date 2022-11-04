import React from "react";
import PropTypes from "prop-types";

const Container = ({ className, children }) => {
  return (
    <section className={`w-[90%] max-w-[1400px] mx-auto py-4 ${className}`}>
      {children}
    </section>
  );
};

Container.prototype = {
  className: PropTypes.string,
  children: PropTypes.element,
};

export default Container;
