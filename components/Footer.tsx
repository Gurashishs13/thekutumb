export default function Footer() {
  return (
    <footer className="bg-black text-white py-20 mt-20">

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

        <div>
          <h2 className="text-3xl font-bold tracking-[0.3em] mb-6">
            THE KUTUMB
          </h2>

          <p className="text-gray-400 leading-7">
            Luxury ethnic fashion curated for modern Indian families.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-5">Shop</h3>

          <ul className="space-y-3 text-gray-400">
            <li>Women</li>
            <li>Men</li>
            <li>Kids</li>
            <li>Festive</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-5">Company</h3>

          <ul className="space-y-3 text-gray-400">
            <li>About</li>
            <li>Contact</li>
            <li>Careers</li>
            <li>Privacy Policy</li>
          </ul>
        </div>


        <div>
          <h3 className="text-xl font-semibold mb-5">Newsletter</h3>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-full text-black"
          />

          <button className="mt-4 bg-[#d4af37] text-black px-6 py-3 rounded-full w-full font-semibold">
            Subscribe
          </button>
        </div>

      </div>

      <div className="border-t border-white/10 mt-16 pt-8 text-center text-gray-500">
        © 2026 THE KUTUMB. All rights reserved.
      </div>

    </footer>
  )
}