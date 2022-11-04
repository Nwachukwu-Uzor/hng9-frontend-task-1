import React from "react";
import PropTypes from "prop-types";

const TextInput = ({ label, id, placeholder, name, value, onChange }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-semibold text-[14px] cursor-pointer" htmlFor={id}>
        {label}
      </label>
      <input
        type="text"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        className="py-1 border-gray-200 border-2 focus:border-none focus:ring-blue-600 focus:ring-2 rounded-sm"
      />
    </div>
  );
};

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextInput;
