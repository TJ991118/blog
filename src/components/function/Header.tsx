import { SquareChartGantt, Package, SquareUserRound } from "lucide-react";
import Link from "next/link";

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
    <header id="header" className="header">
      <div className="header-left">
        <div className="logo"></div>
      </div>
      <div className="header-right">
        <div className="lg:block sm:hidden">
          {navList.map((item) => (
            <Link key={item.value} href={item.value}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="lg:hidden sm:block"></div>
      </div>
    </header>
  );
};

export default Header;
