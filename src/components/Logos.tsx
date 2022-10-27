import React from "react";
import Container from "./Container";

import githubLogo from "../assets/images/github-Logo.svg";
import slackLogo from "../assets/images/slack-Logo.svg";

const Logos = (): JSX.Element => {
  return (
    <Container className="flex items-center justify-center gap-2">
      <img src={slackLogo} alt="slack logo" />
      <img src={githubLogo} alt="github logo" />
    </Container>
  );
};

export default Logos;
