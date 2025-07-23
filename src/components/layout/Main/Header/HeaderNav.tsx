"use client";

import {
  SquareChartGantt,
  Package,
  SquareUserRound,
  AlignJustify,
} from "lucide-react";

import Link from "@/components/common/Link";
import Drawer from "@/components/common/Drawer";
import { ComponentPropsWithRef, FC, useState } from "react";

/**
 * @desc The list of header right
 */
const navList = [
  { label: "Article", icon: <SquareChartGantt />, value: "/post" },
  { label: "Project", icon: <Package />, value: "/project" },
  { label: "About", icon: <SquareUserRound />, value: "/about" },
];


const NavMenu: FC<ComponentPropsWithRef<'div'>> = (props) => {
  return (
    <div {...props}>
      {navList.map((item) => (
        <Link key={item.value} href={item.value} label={item.label} />
      ))}
    </div>
  )
}

const UserInfo: FC<ComponentPropsWithRef<'div'>> = (props) => {
  return (
    <div {...props}>
    </div>
  )
}

const HeaderNav = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="nav lg:block sm:hidden">
      <span onClick={() => { setOpen(true) }}>
        <AlignJustify />
      </span>
      <Drawer
        id="nav-drawer"
        contentClass="nav-content"
        open={open}
        placement="right"
        onOpenChange={(isOpen) => setOpen(isOpen)}
      >
        <NavMenu className="nav-list-content" />
        <UserInfo className="user-info-content" />
      </Drawer>
    </div>
  )
}

export default HeaderNav