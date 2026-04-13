"use client";
import { useState } from "react";
import Image from "next/image";
import NavLink from "./NavLink";
import NavExternalLink from "./NavExternalLink";

/* ─── Inline SVG Icons ─────────────────────────────────────────────────── */

const HomeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-4 h-4">
    <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H15v-6H9v6H4a1 1 0 0 1-1-1V9.5z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PersonIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-4 h-4">
    <circle cx="12" cy="8" r="4" />
    <path d="M4 20c0-4 3.58-7 8-7s8 3 8 7" strokeLinecap="round" />
  </svg>
);

const DocumentIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-4 h-4">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 2v6h6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 13h6M9 17h4" strokeLinecap="round" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <rect x="2" y="2" width="20" height="20" rx="3" />
    <path d="M8 11v5" stroke="white" strokeWidth={1.8} strokeLinecap="round" />
    <circle cx="8" cy="8" r="0.8" fill="white" />
    <path d="M12 16v-3a2 2 0 0 1 4 0v3" stroke="white" strokeWidth={1.8} strokeLinecap="round" fill="none" />
    <path d="M12 11v1" stroke="white" strokeWidth={1.8} strokeLinecap="round" />
  </svg>
);

const HamburgerIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6">
    <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
    <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
  </svg>
);

/* ─── Profile Photo with fallback ──────────────────────────────────────── */

function ProfilePhoto() {
  const [imgError, setImgError] = useState(false);
  return (
    <div className="relative w-[88px] h-[88px] rounded-full border-[3px] border-white overflow-hidden flex-shrink-0 shadow-md">
      {!imgError ? (
        <Image
          src="/profile.jpg"
          fill
          sizes="88px"
          className="object-cover"
          alt="Sachin Kumar"
          priority
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
          <span className="text-white font-bold text-2xl">SK</span>
        </div>
      )}
    </div>
  );
}

/* ─── Shared sidebar inner content ─────────────────────────────────────── */

function SidebarContent({ onClose }: { onClose?: () => void }) {
  return (
    <div className="flex flex-col h-full overflow-y-auto">
      {/* Close button — mobile only */}
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white z-10"
          aria-label="Close navigation"
        >
          <CloseIcon />
        </button>
      )}

      {/* Banner */}
      <div className="relative w-full h-[120px] flex-shrink-0 overflow-hidden bg-gradient-to-br from-sky-400 via-blue-500 to-blue-700">
        {/* Drop /public/banner.jpg to replace this gradient */}
      </div>

      {/* Profile photo + name */}
      <div className="flex flex-col items-center -mt-[44px] px-4 pb-4">
        <ProfilePhoto />
        <h2 className="text-white font-bold text-base mt-3 text-center tracking-wide">
          Sachin Kumar
        </h2>
        <p className="text-gray-400 text-xs mt-1 text-center">Lifelong Learner</p>
      </div>

      {/* Divider */}
      <div className="border-t border-[#2d2d2d] mx-3 mb-2" />

      {/* Navigation */}
      <nav className="flex flex-col gap-0.5 pb-8" aria-label="Main navigation">
        <NavLink href="/" icon={<HomeIcon />} label="Home" />
        <NavLink href="/about" icon={<PersonIcon />} label="About Me" />
        <NavExternalLink href="/resume.pdf" icon={<DocumentIcon />} label="Resume" />
        <NavExternalLink
          href="https://www.linkedin.com/in/kumar-sachin1"
          icon={<LinkedInIcon />}
          label="LinkedIn"
        />
      </nav>
    </div>
  );
}

/* ─── Main export ───────────────────────────────────────────────────────── */

export default function SidebarShell() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile top bar */}
      <div className="md:hidden flex items-center justify-between bg-[#111111] px-4 py-3 flex-shrink-0 border-b border-[#2d2d2d]">
        <span className="text-white font-semibold text-sm tracking-wide">Sachin Kumar</span>
        <button
          onClick={() => setMobileOpen(true)}
          className="text-gray-300 hover:text-white"
          aria-label="Open navigation menu"
        >
          <HamburgerIcon />
        </button>
      </div>

      {/* Mobile backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Desktop sidebar */}
      <aside className="hidden md:flex w-[270px] flex-shrink-0 flex-col bg-[#111111] h-screen sticky top-0 overflow-hidden">
        <SidebarContent />
      </aside>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-[270px] bg-[#111111] flex flex-col transition-transform duration-300 ease-in-out md:hidden ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <SidebarContent onClose={() => setMobileOpen(false)} />
      </div>
    </>
  );
}
