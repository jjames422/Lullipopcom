// Import the necessary modules
import fs from 'fs';
import path from 'path';

// Read data from the local JSON file using fs
async function getCollectionData(collection) {
  // Resolve the path to the JSON file
  const filePath = path.join(
    process.cwd(),
    'public',
    'collections',
    'collections.json'
  );
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(jsonData);

  // Find the specific collection by its slug
  const collectionData = data.collections.find(
    (col) => col.slug === collection
  );

  if (!collectionData) {
    throw new Error('Collection not found');
  }

  return collectionData;
}

export default async function CollectionPage({ params }) {
  const { collection } = params;

  // Fetch the collection data from the local JSON file
  const collectionData = await getCollectionData(collection);

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6">{collectionData.name}</h1>
      <p className="text-lg mb-8">{collectionData.description}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {collectionData.products.map((product) => (
          <div key={product} className="border p-4">
            {/* Display product details */}
            <p>{product}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
