import type { ProductDisplayProps } from "../../types";

export const ProductDisplay = ({
  product,
  showDescription = true,
  showStockStatus = true,
  onAddToCart,
  children,
}: ProductDisplayProps) => {
  return (
    <div className="border rounded-lg p-6 shadow-md bg-white">
      {product.imageUrl && (
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
      )}

      <h2 className="text-xl font-bold">{product.name}</h2>

      <p className="text-lg font-semibold mt-2">
        ${product.price.toFixed(2)}
      </p>

      {showDescription && (
        <p className="text-gray-600 mt-2">
          {product.description}
        </p>
      )}

      {showStockStatus && (
        <p
          className={`mt-2 font-semibold ${
            product.inStock ? "text-green-600" : "text-red-600"
          }`}
        >
          {product.inStock ? "In Stock" : "Out of Stock"}
        </p>
      )}

      {onAddToCart && (
        <button
          onClick={() => onAddToCart(product.id)}
          disabled={!product.inStock}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded 
                    hover:bg-blue-600 disabled:bg-gray-400"
        >
          Add to Cart
        </button>
      )}

      {children && (
        <div className="mt-4 border-t pt-4">
          {children}
        </div>
      )}
    </div>
  );
};