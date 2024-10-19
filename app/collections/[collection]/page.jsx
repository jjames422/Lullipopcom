// Import the necessary components
import Link from 'next/link';

// Fetch data at runtime (server-side) using async/await
async function getCollectionData(collection) {
  const res = await fetch(`https://api.lullipop.com/collections/${collection}`);
  if (!res.ok) {
    throw new Error('Failed to fetch collection data');
  }
  return res.json();
}

export default async function CollectionPage({ params }) {
  const { collection } = params;

  // Fetch the collection data
  const collectionData = await getCollectionData(collection);

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6">{collectionData.name}</h1>
      <p className="text-lg mb-8">{collectionData.description}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {collectionData.products.map((product) => (
          <div key={product.id} className="border p-4">
            <img src={product.image} alt={product.name} className="w-full h-64 object-cover mb-4" />
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-lg text-gray-600 mb-4">${product.price}</p>
            <Link href={`/product/${product.slug}`}>
              <a className="bg-teal-500 text-white px-4 py-2 rounded">View Product</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
