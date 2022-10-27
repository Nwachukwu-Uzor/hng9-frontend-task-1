import React from "react";

import Container from "./Container";

import avatar from "../assets/images/avatar.jpg";

const Header = () => {
  return (
    <Container className="flex items-center justify-center relative">
      <div>
        <img src={avatar} alt="" />
      </div>
    </Container>
  );
};

export default Header;
