// Import the necessary modules
import fs from 'fs';
import path from 'path';

// Read data from the local JSON file using fs
async function getProductData(slug) {
  // Resolve the path to the JSON file
  const filePath = path.join(process.cwd(), 'public', 'products', 'products.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(jsonData);

  // Find the specific product by its slug
  const productData = data.products.find((product) => product.slug === slug);

  if (!productData) {
    throw new Error('Product not found');
  }

  return productData;
}

export default async function ProductPage({ params }) {
  const { slug } = params;

  // Fetch the product data from the local JSON file
  const productData = await getProductData(slug);

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6">{productData.name}</h1>
      <p className="text-lg mb-8">${productData.price}</p>
      <img src={productData.image} alt={productData.name} className="w-full h-64 object-cover mb-4" />
    </div>
  );
}
