'use client'

import Link from 'next/link'
import {
  FiShoppingBag,
  FiUser,
  FiSearch,
  FiMenu,
} from 'react-icons/fi'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50">

      <div className="absolute inset-0 bg-black/40 backdrop-blur-xl border-b border-white/10"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-5 flex items-center justify-between">

        {/* LEFT MENU */}
        <div className="hidden lg:flex items-center gap-10 text-sm uppercase tracking-[0.2em] text-white font-medium">

          <Link
            href="/women"
            className="hover:text-[#d4af37] transition duration-300"
          >
            Women
          </Link>

          <Link
            href="/"
            className="hover:text-[#d4af37] transition duration-300"
          >
            Festive
          </Link>

          <Link
            href="/"
            className="hover:text-[#d4af37] transition duration-300"
          >
            New Arrivals
          </Link>

        </div>

        {/* LOGO */}
        <Link
          href="/"
          className="text-white text-2xl md:text-4xl font-bold tracking-[0.35em]"
        >
          THE KUTUMB
        </Link>

        {/* RIGHT MENU */}
        <div className="flex items-center gap-5 text-white">

          <FiSearch
            size={20}
            className="cursor-pointer hover:text-[#d4af37] transition"
          />

          <FiUser
            size={20}
            className="cursor-pointer hover:text-[#d4af37] transition"
          />

          <FiShoppingBag
            size={20}
            className="cursor-pointer hover:text-[#d4af37] transition"
          />

          <div className="lg:hidden">
            <FiMenu size={24} />
          </div>
        </div>

      </div>
    </nav>
  )
}