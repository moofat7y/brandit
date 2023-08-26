import React from "react";

import { navBarMenus } from "@/utils/helpers";

import NavLink from "./NavLink";

export default function MenuHeader() {
  return (
    <div className="menu-header z-40 bg-primary-400 sticky top-0 py-4 hidden md:block">
      <div className="container">
        <div className="flex gap-8 text-white">
          {navBarMenus.map((menu, index) => (
            <NavLink link={menu} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
