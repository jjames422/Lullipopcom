import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

// Define the path to the products.json file
const filePath = path.join(process.cwd(), 'public', 'products', 'products.json');

export async function GET(request, { params }) {
  const { slug } = params;

  // Read the JSON file
  const data = await fs.readFile(filePath, 'utf-8');
  const products = JSON.parse(data).products;

  // Find the product by its slug
  const product = products.find((product) => product.slug === slug);

  if (!product) {
    return NextResponse.json({ message: 'Product not found' }, { status: 404 });
  }

  return NextResponse.json(product, { status: 200 });
}
