import React, { useState } from "react";

export default function ProductCard({
  product,
  onAddToCart,
  onToggleFavorite,
  isFavorite,
}) {
  const [added, setAdded] = useState(false);

  // Adiocionar ao carrinho
  function handleAddToCart() {
    onAddToCart(product);
    setAdded(true);

    setTimeout(() => setAdded(false), 1500);
  }


  return (
     <div
      className="group border border-gray-200 rounded-2xl shadow-sm p-4 flex flex-col 
                 bg-white/80 backdrop-blur-sm transition-all duration-300 
                 hover:shadow-xl hover:-translate-y-1"
    >
      {/* Imagem */}
      <div className="relative w-full h-48 flex items-center justify-center mb-4 overflow-hidden rounded-xl bg-gray-50">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
        />

        {/* Botão de favorito */}
        <button
          onClick={() => onToggleFavorite(product)}
          aria-label={isFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos"}
          className={`absolute top-2 right-2 p-2 rounded-full shadow-md transition 
            ${isFavorite ? "bg-red-100 text-red-600" : "bg-white/80 text-gray-400 hover:text-red-600"}`}
        >
          {isFavorite ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          )}
        </button>
      </div>

      {/* Título */}
      <h3 className="text-gray-900 font-semibold text-lg mb-2 line-clamp-2 group-hover:text-blue-700 transition">
        {product.title}
      </h3>

      {/* Preço */}
      <p className="text-blue-600 font-bold text-xl mb-4">R$ {product.price.toFixed(2)}</p>

      {/* Botão de adicionar */}
      <div className="mt-auto flex">
        <button
          onClick={handleAddToCart}
          disabled={added}
          className={`w-full py-2 px-4 rounded-xl shadow-md transition-all duration-300
            ${added
              ? "bg-green-600 text-white animate-pulse"
              : "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white hover:scale-[1.02] active:scale-95"
            }`}
        >
          {added ? "✅ Adicionado!" : "Adicionar ao Carrinho"}
        </button>
      </div>
    </div>
  );
}
