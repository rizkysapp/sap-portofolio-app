import Link from "next/link";
import React from "react";

interface Props {
  children: React.ReactNode;
  href: string;
}

const LinkUnderline: React.FC<Props> = ({ children, href }) => {
  return (
    <Link className="p-2 link-underline link-underline-black" href={href}>
      {children}
    </Link>
  );
};

export default LinkUnderline;
