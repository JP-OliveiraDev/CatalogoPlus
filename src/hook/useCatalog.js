import { useState, useEffect } from "react";

export default function useCatalog() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);

  // Fetch produtos
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then(setProducts)
      .catch((e) => console.error(e));
  }, []);

  // Filtra produtos
  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  // Funções de carrinho
  function addToCart(product) {
    setCart((prev) => {
      const exist = prev.find((i) => i.id === product.id);
      if (exist) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  }

  function removeFromCart(id) {
    setCart((prev) => prev.filter((i) => i.id !== id));
  }

  function clearCart() {
    setCart([]);
  }

  // Função favoritos
  function toggleFavorite(product) {
    setFavorites((prev) =>
      prev.some((i) => i.id === product.id)
        ? prev.filter((i) => i.id !== product.id)
        : [...prev, product]
    );
  }

  // Função mover para carrinho
  function moveAllToCart() {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];

      favorites.forEach((fav) => {
        const existing = updatedCart.find((p) => p.id === fav.id);
        if (existing) {
          existing.quantity += 1;
        } else {
          updatedCart.push({ ...fav, quantity: 1 });
        }
      });

      return updatedCart;
    });

    setFavorites([]);
  }

  const isFavorite = (id) => favorites.some((i) => i.id === id);

  return {
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
  };
}
