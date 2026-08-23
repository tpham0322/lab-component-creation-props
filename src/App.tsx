import { useState } from "react";
import { AlertBox } from "./components/AlertBox/AlertBox";
import { UserProfileCard } from "./components/UserProfileCard/UserProfileCard";
import { ProductDisplay } from "./components/ProductDisplay/ProductDisplay";
import type { User, Product } from "./types";

const user: User = {
  id: "1",
  name: "John Doe",
  email: "john.doe@example.com",
  role: "Software Engineer",
  avatarUrl:
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
};

const product: Product = {
  id: "1",
  name: "Wireless Headphones",
  price: 199.99,
  description:
    "High-quality wireless headphones with noise cancellation.",
  imageUrl:
    "https://images.pexels.com/photos/28920288/pexels-photo-28920288/free-photo-of-modern-white-wireless-headphones-on-gray-surface.jpeg",
  inStock: true,
};

function App() {
  const [showAlert, setShowAlert] = useState(false);
  const [cartItems, setCartItems] = useState<string[]>([]);

  const handleAddToCart = (productId: string) => {
    setCartItems((currentItems) => [
      ...currentItems,
      productId,
    ]);

    setShowAlert(true);
  };

  const handleEdit = (userId: string) => {
    alert(`Editing user ${userId}`);
  };

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Component Library
        </h1>

        {showAlert && (
          <div className="mb-6">
            <AlertBox
              type="success"
              message="Product added to cart!"
              onClose={() => setShowAlert(false)}
            >
              <p className="text-sm">
                You currently have {cartItems.length} item(s) in
                your cart.
              </p>
            </AlertBox>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <UserProfileCard
            user={user}
            showEmail={true}
            showRole={true}
            onEdit={handleEdit}
          >
            <p>Last login: 2 hours ago</p>
          </UserProfileCard>

          <ProductDisplay
            product={product}
            showDescription={true}
            showStockStatus={true}
            onAddToCart={handleAddToCart}
          >
            <p>Free shipping available</p>
          </ProductDisplay>
        </div>
      </div>
    </main>
  );
}

export default App;