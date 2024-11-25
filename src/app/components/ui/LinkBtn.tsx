import Link from "next/link";
import React from "react";

interface Props {
  children: React.ReactNode | string;
  href: string;
  className?: string;
  outline?: boolean;
}

const LinkBtn: React.FC<Props> = ({ children, href, className, outline }) => {
  return (
    <Link
      href={href}
      className={`transition duration-200 decoration-indigo-500 ${
        outline ? "text-gray-800 hover:underline sm:text-[18px] tracking-wider font-medium" : "sm:text-[17px] text-sm font-medium text-gray-950 hover:underline hover:text-gray-800"
      } ${className}`}
    >
      {children}
    </Link>
  );
};

export default LinkBtn;
