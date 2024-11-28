import Link from "next/link";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTiktok, FaTwitter } from "react-icons/fa";

const linkSocials = [
  { color: "#1DA1F2", href: "https://www.twitter.com/sapdevv", icon: FaTwitter },
  { color: "#E1306C", href: "https://www.instagram.com/rizkysap_", icon: FaInstagram },
  { color: "#000000", href: "https://github.com/rizkysapp", icon: FaGithub },
  { color: "#0a66c2", href: "https://www.linkedin.com/in/rizky-saputra-905944339", icon: FaLinkedin },
  { color: "#000000", href: "https://www.tiktok.com/@sap.dev", icon: FaTiktok },
];

const Footer = () => {
  return (
    <div className="flex-start space-x-5">
      {linkSocials?.map(({ href, icon: Icon }, i) => (
        <Link className={`text-gray-700 transition hover:text-gray-950`} key={i} href={href}>
          <Icon className="sm:text-[24px] text-[20px]" />
        </Link>
      ))}
    </div>
  );
};

export default Footer;
