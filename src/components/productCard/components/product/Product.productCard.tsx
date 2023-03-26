import { ProductProp } from './types';
import { Caption } from '@components/caption';
import './product.productCard.scss';

export default function Product({ image, title }: ProductProp): JSX.Element {
  return (
    <section>
      {/* <div className="image-container">
        <img src={image} alt={title} className="image-container__image" />
      </div> */}
      <Caption>{title}</Caption>
    </section>
  );
}
