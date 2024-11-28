"use client";

import React from "react";
import Container from "../../Container";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navlist = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const param = usePathname();

  return (
    <Container>
      <div className="flex-between sm:py-14 py-12">
        <div>
          <Link href={"/"} className="font-anton text-gray-800 text-4xl">
            Sap.
          </Link>
        </div>
        <nav>
          <ul className="flex-center sm:space-x-4 space-x-2">
            {navlist?.map((item, i) => (
              <li key={i}>
                <Link
                  className={`px-2 text-[15px] text-gray-700 py-2 ${item.path === param ? "link-underline-active link-underline-black" : "link-underline link-underline-black"}  `}
                  href={item.path}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </Container>
  );
};

export default Navbar;
