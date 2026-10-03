"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo, Button } from "./ui";
import Icon from "./Icon";

const navItems = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Submit Problem", "/submit"]
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-inner">
        <Link href="/" className="logo-button" onClick={() => setOpen(false)}>
          <Logo />
        </Link>
        <nav className={`nav-links ${open ? "nav-open" : ""}`}>
          {navItems.map(([label, path]) => (
            <Link
              key={path}
              href={path}
              className={pathname === path ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <div className="mobile-cta">
            <Link href="/submit" onClick={() => setOpen(false)}>
              <Button full>Get Support</Button>
            </Link>
          </div>
        </nav>
        <div className="desktop-cta">
          <Link href="/submit">
            <Button>Get Support</Button>
          </Link>
        </div>
        <button className="menu-button" onClick={() => setOpen(!open)}>
          <Icon name={open ? "x" : "menu"} size={24} />
        </button>
      </div>
    </header>
  );
}