import { useState, useEffect } from 'react';
import { useVTEX } from 'vtex.render-runtime';
import { animate } from 'react/utils/animationUtils';

type CartItem = {
  id: string;
  quantity: number;
};

const useCartAnimation = () => {
  const { cart } = useVTEX();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [animationState, setAnimationState] = useState<'idle' | 'adding' | 'removing' | 'updating'>('idle');

  useEffect(() => {
    setCartItems(cart.items);
  }, [cart.items]);

  const addItemToCart = (item: CartItem) => {
    setAnimationState('adding');
    animate('cart-add', item);
    setTimeout(() => {
      setCartItems((prevItems) => [
       ...prevItems,
        { id: item.id, quantity: item.quantity },
      ]);
      setAnimationState('idle');
    }, 1000);
  };

  const removeItemFromCart = (itemId: string) => {
    setAnimationState('removing');
    animate('cart-remove', cartItems.find((item) => item.id === itemId));
    setTimeout(() => {
      setCartItems((prevItems) => prevItems.filter((item) => item.id!== itemId));
      setAnimationState('idle');
    }, 1000);
  };

  const updateItemQuantity = (itemId: string, quantity: number) => {
    setAnimationState('updating');
    animate('cart-update', cartItems.find((item) => item.id === itemId));
    setTimeout(() => {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === itemId? {...item, quantity } : item
        )
      );
      setAnimationState('idle');
    }, 1000);
  };

  return {
    cartItems,
    addItemToCart,
    removeItemFromCart,
    updateItemQuantity,
    animationState,
  };
};

export default useCartAnimation;