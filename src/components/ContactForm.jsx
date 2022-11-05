import React, { useState } from "react";
import Button from "./Button";
import Paragraph from "./Paragraph";
import TextInput from "./TextInput";

const ContactForm = () => {
  const [info, setInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    check: false,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInfo((oldValue) => {
      return { ...oldValue, [name]: value };
    });
  };

  const handleCheck = () => {
    setInfo((oldValue) => {
      return { ...oldValue, check: !oldValue.check };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className="flex flex-col gap-5 lg:gap-8 mt-8" onSubmit={handleSubmit}>
      <div className="grid lg:grid-cols-2 lg:gap-x-10 gap-y-5 lg:gap-y-0">
        <TextInput
          name="firstName"
          label="First Name"
          placeholder="Enter your first name"
          id="first_name"
          value={info.firstName}
          onChange={handleChange}
        />
        <TextInput
          name="last_name"
          label="Last Name"
          placeholder="Enter your last name"
          id="lastName"
          value={info.lastName}
          onChange={handleChange}
        />
      </div>
      <TextInput
        name="email"
        label="Email"
        placeholder="yourname@mail.com"
        id="email"
        value={info.email}
        onChange={handleChange}
      />
      <div className="flex flex-col gap-2">
        <label className="font-semibold text-[14px]" htmlFor="message">
          Message
        </label>
        <textarea
          name="message"
          value={info.message}
          onChange={handleChange}
          rows={5}
          id="message"
          placeholder="Send me a message and I'll reply you as soon as possible..."
          className="py-1 border-gray-200 border-2 focus:border-none focus:ring-blue-600 focus:ring-2 rounded-sm"
        ></textarea>
      </div>
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          className="text-blue-600 form-checkbox"
          checked={info.check}
          onChange={handleCheck}
        />
        <p className="text-sm">
          You agree to providing your data to {name} who may contact you.
        </p>
      </div>
      <Button
        text="Send Message"
        bgColor="bg-blue-600"
        textColor="text-white"
        activeRingColor="active:ring-blue-600"
        id="btn__submit"
      />
    </form>
  );
};

export default ContactForm;
