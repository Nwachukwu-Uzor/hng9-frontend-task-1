import React from "react";
import Container from "./Container";

import zuriLogo from "../assets/images/zuri-Logo.svg";
import I4Logo from "../assets/images/I4G-Logo.svg";

const Footer = (): JSX.Element => {
  return (
    <Container className="flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-center">
      <img src={zuriLogo} alt="zuri training" className="h-[20px] lg:h-[30px]" />
      <h4 className="font-lg font-semibold">HNG Internship 9 Frontend Task</h4>
      <img src={I4Logo} alt="ingressive for good" className="h-[20px] lg:h-[30px]" />
    </Container>
  );
};

export default Footer;
