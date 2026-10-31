"use client";
import { createContext, useContext, useState, useCallback } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = useCallback((product, variant, quantity = 1) => {
    setItems((prev) => {
      const key = `${product.id}-${variant ? variant.title : "default"}`;
      const existing = prev.find((i) => i.key === key);
      if (existing) {
        return prev.map((i) =>
          i.key === key ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      const priceUSD = variant?.priceUSD ?? product.priceUSD ?? 120;
      return [
        ...prev,
        {
          key,
          productId: product.id,
          slug: product.slug || product.id,
          name: product.name,
          image: product.image,
          category: product.category,
          variant: variant ? variant.title : null,
          priceUSD,
          quantity,
        },
      ];
    });
    setCartOpen(true);
  }, []);

  const updateQty = useCallback((key, delta) => {
    setItems((prev) =>
      prev
        .map((i) => (i.key === key ? { ...i, quantity: i.quantity + delta } : i))
        .filter((i) => i.quantity > 0)
    );
  }, []);

  const removeItem = useCallback((key) => {
    setItems((prev) => prev.filter((i) => i.key !== key));
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const totalItems = items.reduce((s, i) => s + i.quantity, 0);
  const subtotal = items.reduce((s, i) => s + i.priceUSD * i.quantity, 0);

  return (
    <CartContext.Provider
      value={{ items, cartOpen, setCartOpen, addToCart, updateQty, removeItem, clearCart, totalItems, subtotal }}
    >
      {children}
    </CartContext.Provider>
  );
}

const defaultCart = {
  items: [],
  cartOpen: false,
  setCartOpen: () => {},
  addToCart: () => {},
  updateQty: () => {},
  removeItem: () => {},
  clearCart: () => {},
  totalItems: 0,
  subtotal: 0,
};

export function useCart() {
  const ctx = useContext(CartContext);
  return ctx || defaultCart;
}

