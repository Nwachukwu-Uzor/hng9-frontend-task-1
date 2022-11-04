import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container";
import LinkButton from "./LinkButton";

const Links = () => {
  return (
    <Container className="flex flex-col gap-4">
      <LinkButton id="btn__zuri" displayText="Twitter Link" to="" />
      <LinkButton
        id="btn_zuri"
        displayText="Zuri Team"
        to="https://training.zuri.team/"
      />
      <LinkButton
        id="books"
        displayText="Zuri Books"
        to="http://books.zuri.team/"
      />
      <LinkButton
        id="books"
        displayText="Python Books"
        to="https://books.zuri.team/python-for-beginners?ref_id=uzor%20nwachukwu"
      />
      <LinkButton
        id="pitch"
        displayText="Background Check for Coders"
        to="https://background.zuri.team/"
      />
      <LinkButton
        id="book__design"
        displayText="Design Books"
        to="https://books.zuri.team/design-rules"
      />
      <Link
        to="/contact"
        className="w-full bg-[#EAECF0] font-semibold rounded-md py-6 text-center hover:opacity-75 duration-300"
        id="contact"
      >
        Contact Me
      </Link>
    </Container>
  );
};

export default Links;
