"use client";
import Image from "next/image";
import { SquareChartGantt, Package, SquareUserRound } from "lucide-react";

import Logo from "@/assets/img/logo_light.png";

import Link from "@/components/common/Link";
import Container from "@/components/common/Container";

/**
 * @desc The list of header right
 */
const navList = [
  { label: "Article", icon: <SquareChartGantt />, value: "/post" },
  { label: "Project", icon: <Package />, value: "/project" },
  { label: "About", icon: <SquareUserRound />, value: "/about" },
];

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
          <div className="nav-list lg:block sm:hidden">
            {navList.map((item) => (
              <Link key={item.value} href={item.value} label={item.label} />
            ))}
          </div>
          <div className="lg:hidden sm:block"></div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
