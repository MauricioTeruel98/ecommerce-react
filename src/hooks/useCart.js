// useCart.js
import { useState, useEffect } from "react";

const useCart = () => {
  const storedCart = JSON.parse(localStorage.getItem('carrito')) || [];
  const [itemsCarrito, setItemsCarrito] = useState(storedCart);

  useEffect(() => {
    const updatedCart = JSON.parse(localStorage.getItem('carrito')) || [];
    if (JSON.stringify(updatedCart) !== JSON.stringify(itemsCarrito)) {
      setItemsCarrito(updatedCart);
    }
  }, [itemsCarrito]);

  const addToCart = (product) => {
    setItemsCarrito(prevCart => {
      const existingProduct = prevCart.find(item => item.id === product.id);

      // Si el producto ya está en el carrito, actualiza solo la cantidad
      if (existingProduct) {
        existingProduct.quantity = (existingProduct.quantity || 0) + (product.quantity || 1);
      } else {
        // Si el producto no está en el carrito, agrégalo con la cantidad
        const newCart = [...prevCart, { ...product }];
        localStorage.setItem('carrito', JSON.stringify(newCart));
        console.log("Cart updated:", newCart); // Añade este log
        return newCart;
      }

      // Actualiza el carrito en el almacenamiento local
      localStorage.setItem('carrito', JSON.stringify(prevCart));
      console.log("Cart updated:", prevCart); // Añade este log
      return prevCart;
    });
  };

  const removeFromCart = (productId) => {
    setItemsCarrito(prevCart => {
      const updatedCart = prevCart.filter(item => item.id !== productId);
      localStorage.setItem('carrito', JSON.stringify(updatedCart));
      console.log("Cart updated:", updatedCart); // Añade este log
      return updatedCart;
    });
  };

  const clearCart = () => {
    localStorage.removeItem('carrito');
    setItemsCarrito([]);
    console.log("Cart cleared"); // Añade este log
  };

  return { itemsCarrito, addToCart, removeFromCart, clearCart };
};

export default useCart;
