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
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300">
      <img
        src={image}
        alt={name}
        className="w-full h-[400px] object-cover"
      />

      <div className="p-4">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="mt-2 text-gray-600">₹{price}</p>

        <button className="mt-4 w-full bg-black text-white py-3 rounded-xl">
          Add to Cart
        </button>
      </div>
    </div>
  )
}