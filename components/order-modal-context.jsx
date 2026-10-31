"use client";
import { createContext, useContext, useState, useCallback } from "react";

const OrderModalContext = createContext(null);

export function OrderModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState(null);
  const [mode, setMode] = useState("whatsapp"); // "whatsapp" | "email"

  const openOrderModal = useCallback((prod = null, targetMode = "whatsapp") => {
    setProduct(prod);
    setMode(targetMode);
    setIsOpen(true);
  }, []);

  const closeOrderModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <OrderModalContext.Provider
      value={{
        isOpen,
        product,
        mode,
        openOrderModal,
        closeOrderModal,
      }}
    >
      {children}
    </OrderModalContext.Provider>
  );
}

export function useOrderModal() {
  const ctx = useContext(OrderModalContext);
  if (!ctx) {
    return {
      isOpen: false,
      product: null,
      mode: "whatsapp",
      openOrderModal: () => {},
      closeOrderModal: () => {},
    };
  }
  return ctx;
}
