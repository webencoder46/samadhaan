import Link from "next/link";
import { Logo } from "./ui";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div>
          <Logo inverse />
          <p>Student problems ka solution.<br />Ya kam se kam koshish.</p>
        </div>
        <div className="footer-links">
          <strong>Explore</strong>
          <Link href="/about">About SAMADHAAN</Link>
          <Link href="/services">Services</Link>
          <Link href="/submit">Submit Problem</Link>
        </div>
        <div className="footer-links">
          <strong>HQ Access</strong>
          <Link href="/login">Admin Login</Link>
          <span>Mon–Fri, chai ke baad</span>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 SAMADHAAN™ — Fictional Student Support Initiative</span>
        <span>Made with paperwork & patience.</span>
      </div>
    </footer>
  );
}