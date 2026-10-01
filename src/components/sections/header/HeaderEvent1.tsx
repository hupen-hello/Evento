"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MapPin, Phone, Mail, ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
interface HeaderData {
  logo: { initials: string; main: string; sub: string; tagline: string };
  topbar: {
    address: string;
    phone: string;
    email: string;
    social: {
      facebook: string;
      instagram: string;
      pinterest: string;
      linkedin: string;
    };
  };
  navLinks: {
    label: string;
    href: string;
    subLinks?: { label: string; href: string }[];
  }[];
  ctaText: string;
  ctaLink: string;
}
export default function HeaderEvent1({ data }: { data: HeaderData }) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Prevent scrolling when mobile menu is open
  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full relative z-50 shadow-md"
    >
      {" "}
      {/* Top Bar */}{" "}
      <div className="bg-[#2b1049] border-b border-white/10 hidden lg:block w-full">
        <div className="text-white/90 text-xs py-2.5 flex flex-col md:flex-row justify-between items-center container mx-auto px-4 md:px-8 lg:px-12 max-w-[1300px]">
          {" "}
          <div className="flex items-center gap-6 divide-x divide-white/20">
          {" "}
          <div className="flex items-center gap-2 pr-6 hover:text-white transition-colors cursor-pointer">
            {" "}
            <MapPin size={14} className="text-white/60" />{" "}
            <span>{data.topbar.address}</span>{" "}
          </div>{" "}
          <div className="flex items-center gap-2 px-6 hover:text-white transition-colors cursor-pointer">
            {" "}
            <Phone size={14} className="text-white/60" />{" "}
            <span>{data.topbar.phone}</span>{" "}
          </div>{" "}
          <div className="flex items-center gap-2 pl-6 hover:text-white transition-colors cursor-pointer">
            {" "}
            <Mail size={14} className="text-white/60" />{" "}
            <span>{data.topbar.email}</span>{" "}
          </div>{" "}
        </div>{" "}
        <div className="flex items-center gap-4 mt-2 md:mt-0">
          {" "}
          <span className="font-semibold text-white/80">Follow Us:</span>{" "}
          <div className="flex items-center gap-4">
            {" "}
            <Link
              href={data.topbar.social.facebook}
              className="hover:text-white transition-colors"
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>{" "}
            </Link>{" "}
            <Link
              href={data.topbar.social.instagram}
              className="hover:text-white transition-colors"
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>{" "}
            </Link>{" "}
            <Link
              href={data.topbar.social.pinterest}
              className="hover:text-white transition-colors"
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="m8 20 5.4-9.8" />
                <path d="M10 11.2a2.8 2.8 0 1 1 5.6 0 2.8 2.8 0 0 1-5.6 0Z" />
                <path d="M12.6 14.8v3.6" />
              </svg>{" "}
            </Link>{" "}
            <Link
              href={data.topbar.social.linkedin}
              className="hover:text-white transition-colors"
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>{" "}
            </Link>{" "}
          </div>{" "}
        </div>{" "}
        </div>{" "}
      </div>{" "}
      {/* Main Navbar */}{" "}
      <div className="bg-white w-full border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-[1300px] py-2 flex justify-between items-center">
        {" "}
        {/* Logo */}{" "}
        <Link href="/" className="flex items-center">
          {" "}
          <img
            src="/logo/logo-event.png"
            alt="Event Logo"
            className="h-16 md:h-16 lg:h-20 w-auto object-contain"
          />{" "}
        </Link>{" "}
        {/* Navigation Links */}{" "}
        <nav className="hidden lg:flex items-center gap-8 z-50">
          {" "}
          {data.navLinks.map((link, idx) => {
            const isActive =
              pathname === link.href ||
              (pathname.startsWith(link.href) && link.href !== "/");
            return (
              <div key={idx} className="relative group">
                {" "}
                <Link
                  href={link.href}
                  className={`text-[13px] font-bold uppercase tracking-wider transition-colors py-4 flex items-center gap-1 ${isActive ? "text-purple-700" : "text-gray-700 hover:text-purple-700"}`}
                >
                  {" "}
                  {link.label}{" "}
                  {link.subLinks && (
                    <ChevronDown
                      size={14}
                      className="opacity-70 group-hover:rotate-180 transition-transform duration-300"
                    />
                  )}{" "}
                  {isActive && (
                    <span className="absolute bottom-2 left-0 w-full h-[2px] bg-purple-700 rounded-full" />
                  )}{" "}
                </Link>{" "}
                {/* Dropdown Menu */}{" "}
                {link.subLinks && (
                  <div className="absolute top-full left-0 min-w-[220px] bg-white shadow-xl rounded-b-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top translate-y-2 group-hover:translate-y-0 border-t-2 border-purple-700 z-50">
                    {" "}
                    <div className="flex flex-col py-2">
                      {" "}
                      {link.subLinks.map((subLink, subIdx) => (
                        <Link
                          key={subIdx}
                          href={subLink.href}
                          className="px-5 py-2.5 text-[13px] font-medium text-gray-700 hover:text-purple-700 hover:bg-purple-50 transition-colors whitespace-nowrap"
                        >
                          {" "}
                          {subLink.label}{" "}
                        </Link>
                      ))}{" "}
                    </div>{" "}
                  </div>
                )}{" "}
              </div>
            );
          })}{" "}
        </nav>{" "}
        {/* CTA Button and Mobile Toggle */}{" "}
        <div className="flex items-center gap-4">
          {" "}
          <Link
            href={data.ctaLink}
            className="hidden lg:flex items-center gap-2 bg-[#421d6e] hover:bg-[#2b1049] text-white text-[13px] font-semibold px-7 py-3.5 rounded-sm transition-colors uppercase tracking-wider"
          >
            {" "}
            {data.ctaText} <ArrowRight size={16} />{" "}
          </Link>{" "}
          
          <button 
            className="lg:hidden p-2 text-gray-700 hover:text-purple-700 transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open mobile menu"
          >
            <Menu size={24} />
          </button>
        </div>{" "}
      </div>{" "}
      </div>{" "}

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-[100] lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[85%] max-w-[320px] bg-white z-[101] shadow-2xl overflow-y-auto lg:hidden"
            >
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <img
                  src="/logo/logo-event.png"
                  alt="Event Logo"
                  className="h-10 w-auto object-contain"
                />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-gray-500 hover:text-purple-700 bg-gray-50 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="py-6 px-4 flex flex-col gap-2">
                {data.navLinks.map((link, idx) => (
                  <div key={idx} className="flex flex-col">
                    <Link
                      href={link.href}
                      onClick={() => !link.subLinks && setIsMobileMenuOpen(false)}
                      className="px-4 py-3 text-base font-semibold text-gray-800 hover:text-purple-700 transition-colors uppercase tracking-wider flex justify-between items-center"
                    >
                      {link.label}
                    </Link>
                    
                    {link.subLinks && (
                      <div className="flex flex-col pl-8 py-2 gap-2 border-l-2 border-gray-100 ml-6">
                        {link.subLinks.map((subLink, subIdx) => (
                          <Link
                            key={subIdx}
                            href={subLink.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="py-2 text-sm text-gray-600 hover:text-purple-700 transition-colors"
                          >
                            {subLink.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                <div className="mt-8 px-4">
                  <Link
                    href={data.ctaLink}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 w-full bg-[#421d6e] hover:bg-[#2b1049] text-white text-[13px] font-semibold px-7 py-4 rounded-sm transition-colors uppercase tracking-wider"
                  >
                    {data.ctaText} <ArrowRight size={16} />
                  </Link>
                </div>

                <div className="mt-10 px-4 flex justify-center gap-6">
                  <Link href={data.topbar.social.facebook} className="text-gray-400 hover:text-purple-700"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></Link>
                  <Link href={data.topbar.social.instagram} className="text-gray-400 hover:text-purple-700"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg></Link>
                  <Link href={data.topbar.social.linkedin} className="text-gray-400 hover:text-purple-700"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg></Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
