import React from 'react';
import { useVTEX } from 'vtex.styleguide';
import { cssHandles } from '@vtex/css-handles';
import { Cart } from 'vtex.store-ui';
import { removeFromCart } from 'react/hooks/useCartAnimation';
import { handleAnimation } from 'react/utils/animationUtils';
import styles from 'styles/global/animations.css';

const CSS_HANDLES = ['mini-cart', 'mini-cart-item', 'mini-cart-total'];

interface MiniCartProps {
  cart: Cart;
}

const MiniCart: React.FC<MiniCartProps> = ({ cart }) => {
  const { t } = useVTEX();
  const [isOpen, setIsOpen] = React.useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    handleAnimation('toggle');
  };

  const handleRemove = (itemId: string) => {
    removeFromCart(itemId);
    handleAnimation('remove');
  };

  return (
    <div
      className={`${cssHandles(CSS_HANDLES).miniCart} ${isOpen? cssHandles(CSS_HANDLES).miniCartOpen : ''} ${styles.miniCart}`}
    >
      <button onClick={handleToggle}>{t('viewCart')}</button>
      {isOpen && (
        <div className={cssHandles(CSS_HANDLES).miniCartItem}>
          {cart.items.map(item => (
            <div key={item.id}>
              <div>{item.name}</div>
              <div>{item.quantity} x {item.price}</div>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          ))}
          <div className={cssHandles(CSS_HANDLES).miniCartTotal}>{t('total')}: {cart.total}</div>
        </div>
      )}
    </div>
  );
};

export default MiniCart;