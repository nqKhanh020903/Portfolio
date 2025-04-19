'use client';
import Link from "next/link";
import { motion } from "framer-motion";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#1c1c22]/80 shadow-sm border-b border-white/10"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl md:text-2xl font-bold tracking-wider text-yellow-400">
          KhanhNQ
        </Link>

        {/* Menu */}
        <div className="space-x-4 text-sm md:text-base font-medium text-zinc-300">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className="hover:text-yellow-400 transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}