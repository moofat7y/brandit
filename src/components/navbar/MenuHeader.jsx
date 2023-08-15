"use client";
import { navBarMenus } from "@/utils/helpers";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
export default function MenuHeader() {
  const pathname = usePathname();

  return (
    <div className="menu-header z-40 bg-primary-400 sticky top-0 py-4 hidden md:block">
      <div className="container">
        <div className="flex gap-8 text-white">
          {navBarMenus.map((menu, index) => {
            return (
              <Link
                className={` hover:text-secondary-400 duration-150 ${
                  pathname === menu.href ? "text-secondary-400 " : ""
                }`}
                key={index}
                href={menu.href}
              >
                {menu.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
