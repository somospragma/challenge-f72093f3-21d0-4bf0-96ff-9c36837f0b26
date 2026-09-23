import React from 'react';
import { useVTEX } from 'vtex.styleguide';
import { cssHandles } from '@vtex/css-handles';
import { Product } from 'vtex.store-ui';
import { addToCart } from 'react/hooks/useCartAnimation';
import { handleAnimation } from 'react/utils/animationUtils';
import styles from 'styles/global/animations.css';

const CSS_HANDLES = ['product-card', 'product-image', 'product-name', 'product-price'];

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { t } = useVTEX();
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    handleAnimation('hover');
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    handleAnimation('leave');
  };

  return (
    <div
      className={`${cssHandles(CSS_HANDLES).productCard} ${styles.productCard}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        className={cssHandles(CSS_HANDLES).productImage}
        src={product.imageUrl}
        alt={product.name}
      />
      <div className={cssHandles(CSS_HANDLES).productName}>{product.name}</div>
      <div className={cssHandles(CSS_HANDLES).productPrice}>{product.price}</div>
      <AddToCartButton product={product} />
    </div>
  );
};

export default ProductCard;