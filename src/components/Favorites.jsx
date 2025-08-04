import React, { useState } from "react";

export default function Favorites({ isOpen, onClose, favorites, onRemove, moveAllToCart }) {
  const [removing, setRemoving] = useState(null);

  // Animação ao remover item
  const handleRemove = (id) => {
    setRemoving(id);
    setTimeout(() => {
      onRemove(id);
      setRemoving(null);
    }, 300); 
  };

  // Mover para carrinho
  const handleMoveAll = () => {
    moveAllToCart();
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity animate-fadeIn z-40"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl rounded-l-2xl flex flex-col transform transition-transform duration-300 z-50
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >

        <header className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-pink-50 to-pink-100">
          <h2 className="text-lg font-semibold text-gray-800">❤️ Favoritos</h2>
          <button
            onClick={onClose}
            aria-label="Fechar favoritos"
            className="text-gray-600 hover:text-red-600 transition-transform transform hover:rotate-90"
          >
            ✕
          </button>
        </header>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {favorites.length === 0 ? (
            <p className="text-gray-500 text-center mt-10">
              Nenhum favorito adicionado
            </p>
          ) : (
            favorites.map((item) => (
              <div
                key={item.id}
                className={`flex items-center gap-3 p-2 rounded-lg border border-gray-100 shadow-sm transition-all
                  ${removing === item.id ? "opacity-0 translate-x-10 duration-300" : "hover:shadow-md hover:bg-gray-50"}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-contain rounded-md"
                />
                <div className="flex-1">
                  <h3 className="font-medium text-gray-800 line-clamp-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">R$ {item.price.toFixed(2)}</p>
                </div>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="text-red-500 hover:text-red-700 transition-transform transform hover:scale-110"
                >
                  Remover
                </button>
              </div>
            ))
          )}
        </div>

        {favorites.length > 0 && (
          <footer className="p-4 border-t bg-white">
            <button
              onClick={handleMoveAll}
              className="w-full py-2 rounded-lg font-medium shadow-md transition-all duration-300
                         bg-gradient-to-r from-pink-500 to-pink-600 text-white
                         hover:from-pink-600 hover:to-pink-700 hover:scale-[1.02] active:scale-95"
            >
              Mover todos para o carrinho
            </button>
          </footer>
        )}
      </aside>
    </>
  );
}
