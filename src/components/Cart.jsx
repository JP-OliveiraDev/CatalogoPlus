import React, { useState } from "react";

export default function Cart({ isOpen, onClose, onClear, cartItems, onRemove }) {
  const [removing, setRemoving] = useState(null);
  const [finished, setFinished] = useState(false);

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // Animação ao remover item
  const handleRemove = (id) => {
    setRemoving(id);
    setTimeout(() => {
      onRemove(id);
      setRemoving(null);
    }, 300);
  };

  // Animação ao finalizar compra
  const handleFinish = () => {
    setFinished(true);
    setTimeout(() => {
      onClear();
      setFinished(false);
      onClose();
    }, 2000);
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
        <header className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-blue-50 to-blue-100">
          <h2 className="text-lg font-semibold text-gray-800">🛒 Seu Carrinho</h2>
          <button
            onClick={onClose}
            aria-label="Fechar carrinho"
            className="text-gray-600 hover:text-red-600 transition-transform transform hover:rotate-90"
          >
            ✕
          </button>
        </header>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {cartItems.length === 0 ? (
            <p className="text-gray-500 text-center mt-10">
              Seu carrinho está vazio
            </p>
          ) : (
            cartItems.map((item) => (
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
                  <h3 className="font-medium text-gray-800 line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    R$ {item.price.toFixed(2)} × {item.quantity}
                  </p>
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

        {cartItems.length > 0 && (
          <footer className="p-4 border-t bg-white">
            <div className="flex justify-between font-semibold text-gray-900 mb-3">
              <span>Total:</span>
              <span>R$ {total.toFixed(2)}</span>
            </div>
            <button
              onClick={handleFinish}
              disabled={finished}
              className={`w-full py-2 rounded-lg font-medium shadow-md transition-all duration-300
                ${finished
                  ? "bg-green-600 text-white animate-pulse"
                  : "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white hover:scale-[1.02] active:scale-95"}`}
            >
              {finished ? "✅ Compra Finalizada!" : "Finalizar Compra"}
            </button>
          </footer>
        )}
      </aside>
    </>
  );
}
