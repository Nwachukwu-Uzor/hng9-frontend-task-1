import React from "react";

import Container from "./Container";

import avatar from "../assets/images/avatar.jpg";
import optionsBtn from "../assets/images/optionsBtn.svg";
import shareBtn from "../assets/images/shareBtn.svg";

const Header = () => {
  return (
    <Container className="flex items-center justify-center relative mt-4">
      <div className="flex flex-col items-center justify-center gap-1">
        <img
          src={avatar}
          alt=""
          className="w-[100px] h-[100px] rounded-full"
          id="profile__img"
        />
        <h1 className="font-bold text-lg lg:text-[20px]" id="twitter">
          Uzor_Nwachukwu
        </h1>
        <h1 className="hidden" id="slack">
          uzor nwachukwu
        </h1>
        <img src={optionsBtn} className="absolute top-0 right-0 lg:hidden" />
        <img
          src={shareBtn}
          className="absolute top-0 right-[20%] hidden lg:block"
        />
      </div>
    </Container>
  );
};

export default Header;
