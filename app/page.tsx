import Navbar from '@/components/Navbar'
import ProductCard from '@/components/ProductCard'

const products = [
  {
    name: 'Luxury Co-ord Set',
    image: '/products/Cordset1.jpg',
    price: 1499,
  },
  {
    name: 'Festive Co-ord Set',
    image: '/products/Cordset2.jpg',
    price: 2999,
  },
  {
    name: 'Elegant Designer Set',
    image: '/products/Cordset3.jpg',
    price: 2499,
  },
]

export default function Home() {
  return (
    <main className="bg-[#f8f3ed] overflow-hidden">

      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-screen overflow-hidden">

        <img
          src="/products/hero.jpg"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/65" />

        {/* CONTENT */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">

          <p className="text-[#d4af37] uppercase tracking-[0.4em] mb-6 text-sm">
            Luxury Ethnic Wear
          </p>

          <h1 className="text-white text-4xl md:text-7xl font-bold leading-tight max-w-5xl">
            Tradition Woven <br />
            Into Modern Elegance
          </h1>

          <p className="text-gray-200 mt-8 text-lg md:text-2xl max-w-2xl">
            Curated ethnic fashion for modern women and families.
          </p>

          <button className="mt-10 bg-[#d4af37] text-black px-10 py-4 rounded-full font-semibold hover:scale-105 transition duration-300 shadow-[0_0_40px_rgba(212,175,55,0.4)]">

            Explore Collection

          </button>
        </div>
      </section>

      {/* FEATURED SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[0.3em] text-[#a67c52] mb-4">
            Featured Collection
          </p>

          <h2 className="text-5xl font-bold text-[#1a1a1a]">
            Best Selling Styles
          </h2>

        </div>

        {/* PRODUCTS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {products.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              image={product.image}
              price={product.price}
            />
          ))}

        </div>
      </section>

    </main>
  )
}