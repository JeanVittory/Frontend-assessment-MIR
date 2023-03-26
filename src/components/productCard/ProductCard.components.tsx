import { ProductCardProp } from './types';
import { Product } from './components/product';
import './productCard.components.scss';

export default function ProductCard({
  id,
  title,
  image,
}: ProductCardProp): JSX.Element {
  return (
    <article className="product-container">
      <Product title={title} image={image} />
    </article>
  );
}
