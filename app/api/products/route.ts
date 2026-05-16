import { NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import Product from '@/models/Product'

export async function GET() {
  try {
    await connectDB()

    console.log('MongoDB Connected')

    const products = await Product.find()

    return NextResponse.json(products)

  } catch (error: any) {

    console.log(error)

    return NextResponse.json(
      {
        error: error.message,
      },
      {
        status: 500,
      }
    )
  }
}

export async function POST(req: Request) {
  try {
    await connectDB()

    const body = await req.json()

    const product = await Product.create(body)

    return NextResponse.json(product)

  } catch (error: any) {

    console.log(error)

    return NextResponse.json(
      {
        error: error.message,
      },
      {
        status: 500,
      }
    )
  }
}