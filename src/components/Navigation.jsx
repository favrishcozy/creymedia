import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto max-w-container px-6 py-4 flex items-center justify-between backdrop-blur bg-navy/60 border-b border-white/6">
          <div className="flex items-center gap-3">
            <img src="/images/Logo_brand.png" alt="Logo" className="w-10 h-10 rounded-xl object-cover" />
            <div className="text-white font-semibold tracking-tight">CREY DREAM HOUSE</div>
          </div>

          <nav className="hidden md:flex items-center gap-4 text-sm text-white/90 absolute left-1/2 -translate-x-1/2">
            <Link to="/" className="px-3 py-2 rounded-md hover:bg-white/6">Home</Link>
            <Link to="/live" className="px-3 py-2 rounded-md hover:bg-white/6">Live</Link>
            <Link to="/news" className="px-3 py-2 rounded-md hover:bg-white/6">News</Link>
            <Link to="/about" className="px-3 py-2 rounded-md hover:bg-white/6">About</Link>
          </nav>
          <div className="hidden md:flex items-center gap-4">
            <input className="px-3 py-1 rounded-md bg-white/6 text-white placeholder-muted" placeholder="Search..." />
            <button className="px-4 py-2 rounded-md bg-brand text-navy font-semibold drop-shadow-btn">Get started</button>
          </div>

          <div className="md:hidden flex items-center gap-3">
            <button className="p-2 bg-navy rounded-md text-white" onClick={() => alert('Search')}>🔍</button>
            <button className="p-2 bg-navy rounded-md text-white" onClick={() => setMenuOpen(true)}>☰</button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU (full screen drawer) */}
      {menuOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 bg-slate-900/80 z-50">
          <div className="p-6 pt-12 max-w-md mx-auto bg-gradient-to-b from-slate-800/80 to-slate-900/90 rounded-2xl mt-6 shadow-2xl">
            <button onClick={() => setMenuOpen(false)} className="mb-4 text-white">Close</button>
            <div className="flex flex-col gap-4">
              <Link onClick={() => setMenuOpen(false)} to="/live" className="py-3 rounded-lg bg-emerald-400 text-slate-900 font-semibold">Live Session 🔴</Link>
              <Link onClick={() => setMenuOpen(false)} to="/" className="py-3 rounded-lg bg-white/6 text-white">Home</Link>
              <Link onClick={() => setMenuOpen(false)} to="/news" className="py-3 rounded-lg bg-white/6 text-white">Explore Articles</Link>
              <Link onClick={() => setMenuOpen(false)} to="/videos" className="py-3 rounded-lg bg-white/6 text-white">Library</Link>
              <Link onClick={() => setMenuOpen(false)} to="/about" className="py-3 rounded-lg bg-white/6 text-white">About</Link>
              <Link onClick={() => setMenuOpen(false)} to="/contact" className="py-3 rounded-lg bg-white/6 text-white">Contact</Link>
            </div>
            <div className="mt-6 flex gap-3 justify-center text-xs opacity-80">
              <span>Instagram</span> · <span>TikTok</span> · <span>X</span>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Navigation;
