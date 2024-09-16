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
    <header className="mx-auto grid max-w-[996px] grid-cols-[40fr_70fr] items-center border border-primary-800 p-3 py-5 lg:my-5 lg:rounded-xl lg:py-3">
      <Logo />
      <nav className="hidden items-center justify-between text-primary-100 lg:flex">
        <ul className="flex items-center gap-7 font-medium">
          {NavLinks.links.map((link, index) => (
            <li
              key={index}
              className="hover:text-primary-500 transition-all duration-300"
            >
              <Link href={link.href}>{link.title}</Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <ul className="hidden items-center gap-3 lg:flex">
            {NavLinks.socials.map((social, index) => (
              <li
                key={index}
                className="hover:text-primary-500 transition-all duration-300"
              >
                <Link href={social.href}>{social.icon}</Link>
              </li>
            ))}
          </ul>
          <Link
            href="/app"
            className="text-primary-500 flex items-center gap-2 rounded-[4px] bg-primary-200 px-5 py-2 text-center text-sm font-bold capitalize"
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
