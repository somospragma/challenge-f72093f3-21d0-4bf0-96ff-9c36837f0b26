import React from 'react';
import { useVTEX } from 'vtex.styleguide';
import { cssHandles } from '@vtex/css-handles';
import { Product } from 'vtex.store-ui';
import { addToCart } from 'react/hooks/useCartAnimation';
import { handleAnimation } from 'react/utils/animationUtils';
import styles from 'styles/global/animations.css';

const CSS_HANDLES = ['add-to-cart-button', 'add-to-cart-success', 'add-to-cart-error'];

interface AddToCartButtonProps {
  product: Product;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ product }) => {
  const { t } = useVTEX();
  const [isAdded, setIsAdded] = React.useState(false);
  const [hasError, setHasError] = React.useState(false);

  const handleClick = () => {
    addToCart(product)
     .then(() => {
        setIsAdded(true);
        handleAnimation('success');
      })
     .catch(() => {
        setHasError(true);
        handleAnimation('error');
      });
  };

  return (
    <button
      className={`${cssHandles(CSS_HANDLES).addToCartButton} ${isAdded? cssHandles(CSS_HANDLES).addToCartSuccess : ''} ${hasError? cssHandles(CSS_HANDLES).addToCartError : ''} ${styles.addToCartButton}`}
      onClick={handleClick}
    >
      {isAdded? t('productAdded') : t('addToCart')}
    </button>
  );
};

export default AddToCartButton;