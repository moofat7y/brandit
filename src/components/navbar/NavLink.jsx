"use client";
import React from "react";

import Link from "next/link";

import { usePathname } from "next/navigation";

export default function NavLink({ link }) {
  const pathname = usePathname();
  return (
    <Link
      className={` hover:text-secondary-400 duration-150 ${
        pathname === link.href ? "text-secondary-400 " : ""
      }`}
      href={link.href}
    >
      {link.label}
    </Link>
  );
}
