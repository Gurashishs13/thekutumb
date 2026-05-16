'use client'

import { useState } from 'react'

export default function AdminPage() {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [category, setCategory] = useState('')
  const [stock, setStock] = useState('')

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    const res = await fetch('/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        price,
        description,
        image,
        category,
        stock,
      }),
    })

    if (res.ok) {
      alert('Product Added Successfully')

      setTitle('')
      setPrice('')
      setDescription('')
      setImage('')
      setCategory('')
      setStock('')
    }
  }

  return (
    <main className="min-h-screen bg-[#f8f3ed] p-10">

      <div className="max-w-3xl mx-auto bg-white p-10 rounded-[30px] shadow-xl">

        <h1 className="text-4xl font-bold mb-10">
          Admin Dashboard
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <input
            type="text"
            placeholder="Product Title"
            className="w-full border p-4 rounded-xl"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            type="number"
            placeholder="Price"
            className="w-full border p-4 rounded-xl"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <textarea
            placeholder="Description"
            className="w-full border p-4 rounded-xl h-40"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <input
            type="text"
            placeholder="Image URL"
            className="w-full border p-4 rounded-xl"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />

          <input
            type="text"
            placeholder="Category"
            className="w-full border p-4 rounded-xl"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />

          <input
            type="number"
            placeholder="Stock"
            className="w-full border p-4 rounded-xl"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />

          <button className="bg-black text-white px-8 py-4 rounded-full hover:bg-[#d4af37] hover:text-black transition">

            Upload Product

          </button>

        </form>
      </div>
    </main>
  )
}