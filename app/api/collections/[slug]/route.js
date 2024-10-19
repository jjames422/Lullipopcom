import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

// Define the path to the collections.json file
const filePath = path.join(process.cwd(), 'public', 'collections', 'collections.json');

export async function GET(request, { params }) {
  const { slug } = params;

  // Read the JSON file
  const data = await fs.readFile(filePath, 'utf-8');
  const collections = JSON.parse(data).collections;

  // Find the collection by its slug
  const collection = collections.find((collection) => collection.slug === slug);

  if (!collection) {
    return NextResponse.json({ message: 'Collection not found' }, { status: 404 });
  }

  return NextResponse.json(collection, { status: 200 });
}
