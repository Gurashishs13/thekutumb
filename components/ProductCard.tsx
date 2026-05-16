interface ProductProps {
  name: string
  image: string
  price: number
}

export default function ProductCard({
  name,
  image,
  price,
}: ProductProps) {
  return (
    <div className="group">

      <div className="overflow-hidden rounded-[30px] bg-white shadow-xl">

        <div className="overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-[500px] object-cover group-hover:scale-105 transition duration-700"
          />
        </div>

        <div className="p-6">

          <h2 className="text-2xl font-semibold text-[#1a1a1a]">
            {name}
          </h2>

          <p className="mt-3 text-gray-600 text-lg">
            ₹{price}
          </p>

          <button className="mt-6 w-full bg-black text-white py-4 rounded-full hover:bg-[#d4af37] hover:text-black transition duration-300">
            Add To Cart
          </button>
       </div>
      </div>
    </div>
  )
}