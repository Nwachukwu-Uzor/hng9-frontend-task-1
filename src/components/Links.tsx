import React from "react";
import Container from "./Container";
import LinkButton from "./LinkButton";

const Links = (): JSX.Element => {
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
    </Container>
  );
};

export default Links;
