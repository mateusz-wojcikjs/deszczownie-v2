import Image from 'next/image';

export const ProductList = ({ products }) => {
  if (!products.length) {
    return <p className="text-center text-gray-500">No products found in this category.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {products.map((product) => (
        <div key={product.id} className="border rounded-lg p-4 shadow-md">
          {product.image && (
            <Image src={product.image.url} alt={product.title} width={300} height={200} className="rounded-md" />
          )}
          <h3 className="text-lg font-semibold mt-4">{product.title}</h3>
          <p className="text-gray-600">{product.description}</p>
        </div>
      ))}
    </div>
  );
};
