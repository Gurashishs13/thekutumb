import Link from 'next/link'
import { FiShoppingBag } from 'react-icons/fi'

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link href="/" className="text-2xl font-bold tracking-wide">
          THE KUTUMB
        </Link>

        <div className="hidden md:flex gap-8 text-sm font-medium">
          <Link href="/women">Women</Link>
          <Link href="/">Festive</Link>
          <Link href="/">New Arrivals</Link>
          <Link href="/">Sale</Link>
          </div>

        <div className="flex items-center gap-4">
          <FiShoppingBag size={22} />
        </div>
      </div>
    </nav>
  )
}