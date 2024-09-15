import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiDownload2Line, RiInstagramFill } from "react-icons/ri";

import Logo from "./ui/Logo";
import Link from "next/link";

const NavLinks = {
  links: [
    { title: "Why Amuse", href: "/" },
    { title: "Our Vision", href: "/" },
    { title: "Blog", href: "/blog" },
  ],
  socials: [
    { icon: <FaFacebook size={22} />, href: "#" },
    { icon: <RiInstagramFill size={24} />, href: "#" },
    { icon: <FaLinkedin size={22} />, href: "#" },
    { icon: <FaXTwitter size={22} />, href: "#" },
  ],
};

function Navigation() {
  return (
    <header className="p-3 grid grid-cols-[40fr_70fr] items-center max-w-[996px] mx-auto border border-primary-800 rounded-xl my-5 ">
      <Logo />
      <nav className=" text-primary-100 flex items-center justify-between">
        <ul className="flex items-center font-medium gap-7 ">
          {NavLinks.links.map((link, index) => (
            <li key={index}>
              <Link href={link.href}>{link.title}</Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <ul className="flex items-center gap-3">
            {NavLinks.socials.map((social, index) => (
              <li key={index}>
                <Link href={social.href}>{social.icon}</Link>
              </li>
            ))}
          </ul>
          <Link
            href="/app"
            className="capitalize px-5 text-sm text-center rounded-[4px] py-2 font-bold gap-2 flex items-center bg-primary-200 text-primary-700"
          >
            <span>
              <RiDownload2Line size={20} />
            </span>
            <span>Get App</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
