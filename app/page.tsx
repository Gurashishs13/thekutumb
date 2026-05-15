import Navbar from '@/components/Navbar'
import ProductCard from '@/components/ProductCard'

const products = [
  {
    name: 'Floral Kurti',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c',
    price: 1499,
  },
  {
    name: 'Festive Saree',
    image: 'https://images.unsplash.com/photo-1583391733981-8496f0b4f1c2',
    price: 2999,
  },
  {
    name: 'Elegant Co-ord Set',
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b',
    price: 2499,
  },
]

export default function Home() {
  return (
    <main>
      <Navbar />

      <section className="h-screen bg-[#f7f3ee] flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            The Kutumb
          </h1>

          <p className="text-lg text-gray-700 mb-8">
            Fashion for Every Generation
          </p>

          <button className="bg-black text-white px-8 py-4 rounded-full">
            Explore Collection
          </button>
        </div>
      </section>


<section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Featured Collection
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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