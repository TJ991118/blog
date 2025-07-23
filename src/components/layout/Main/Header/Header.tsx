"use client";

import Image from "next/image";

import "./header.scss"
import Logo from "@/assets/img/logo_light.png";

import HeaderNav from "./HeaderNav";
import Container from "@/components/common/Container";

const Header = () => {
  return (
    <header id="header">
      <Container type="section" className="header">
        <div className="header-left">
          <div className="logo">
            <Image src={Logo} alt="描述文字" width={500} height={300} />
          </div>
        </div>
        <div className="header-right">
          <HeaderNav />
        </div>
      </Container>
    </header>
  );
};

export default Header;
