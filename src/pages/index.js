import { useState, useEffect } from "react";
import Header from "../components/Header";
import Cart from "../components/Cart";
import Favorites from "../components/Favorites";
import ProductCard from "../components/ProductCard";
import useCatalog from "../hook/useCatalog";

export default function Home() {
  const {
    search,
    setSearch,
    filtered,
    cart,
    setFavorites,
    addToCart,
    removeFromCart,
    clearCart,
    favorites,
    toggleFavorite,
    isFavorite,
    isCartOpen,
    setIsCartOpen,
    isFavoritesOpen,
    setIsFavoritesOpen,
    moveAllToCart,
  } = useCatalog();

  // estado de loading
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (filtered.length > 0) {
      setLoading(false);
    }
  }, [filtered]);


  return (
    <div className="bg-gray-50 min-h-screen overflow-x-hidden">
      {/* Cabeçalho */}
      <Header
        onSearch={setSearch}
        cartCount={cart.reduce((acc, i) => acc + i.quantity, 0)}
        favCount={favorites.length}
        onCartClick={() => setIsCartOpen(true)}
        onFavoritesClick={() => setIsFavoritesOpen(true)}
      />

      {/* Drawer de carrinho */}
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onRemove={removeFromCart}
        onClear={clearCart}
      />

      {/* Drawer de favoritos */}
      <Favorites
        isOpen={isFavoritesOpen}
        onClose={() => setIsFavoritesOpen(false)}
        favorites={favorites}
        onRemove={(id) =>
          setFavorites((prev) => prev.filter((i) => i.id !== id))
        }
        moveAllToCart={moveAllToCart}
      />

      <main className="w-full">
        {/* Titulo */}
        <section className="relative bg-gradient-to-r from-blue-50 to-blue-100 border-b border-gray-200 shadow-sm mb-3">
          <div className="mx-auto px-20 text-center w-full">
            <h2
              className="text-[25px] md:text-[50px] font-extrabold 
                        bg-gradient-to-r from-blue-600 via-blue-800 to-blue-600 
                        bg-clip-text text-transparent 
                        tracking-tight leading-snug
                        drop-shadow-lg py-1"
                      style={{ fontFamily: "var(--font-title)" }}
            >
              Catálogo de Produtos
            </h2>

            <div className="mt-2 flex justify-center">
              <div className="h-1 w-full sm:w-[600px] md:w-[800px] lg:w-[1200px]  bg-gradient-to-r from-transparent via-blue-700 to-transparent rounded-full relative"></div>
            </div>
          </div>
        </section>

        {/* Grid de produtos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full px-4 mt-4">
          {loading
            ? Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="border rounded-lg shadow-sm p-4 flex flex-col animate-pulse"
                >
                  <div className="w-full h-48 bg-gray-200 rounded mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
                  <div className="h-10 bg-gray-200 rounded w-full"></div>
                </div>
              ))
            : filtered.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={addToCart}
                  onToggleFavorite={toggleFavorite}
                  isFavorite={isFavorite(product.id)}
                />
              ))}
        </div>
      </main>
    </div>
  );
}
