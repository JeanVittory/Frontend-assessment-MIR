import { useParams } from 'react-router-dom';
import { Rating } from 'semantic-ui-react';
import { Caption } from '@components/caption';
import { Paragraph } from '@components/paragraph';
import { Spinner } from '@components/spinner';
import { useGetProductsQuery } from '@service/products.service';
import { ReturnQueryProduct } from '../../types';
import { GetProducts } from '@service/types';
import { ProductParam } from './types';
import 'semantic-ui-css/semantic.min.css';
import './detail.pages.scss';

export default function Detail(): JSX.Element {
  const { id } = useParams<ProductParam>();
  const { data, isLoading } = useGetProductsQuery<ReturnQueryProduct>();

  const product: GetProducts | undefined = data?.find(
    (element: GetProducts) => element.id === +id!
  );

  if (isLoading) return <Spinner />;

  return (
    <main className="detail">
      <article className="product-detail">
        <div className="image-container">
          <img
            src={product?.image}
            alt="Product"
            className="image-container__image"
          />
        </div>
        <Caption className="product-detail__title">
          <b>{product?.title}</b>
        </Caption>
        <Rating
          defaultRating={Math.round(product?.rating?.rate!)}
          maxRating={5}
          disabled
          className="rating"
        />
        <Paragraph className="product-detail__paragraph">
          {product?.description}
        </Paragraph>
        <p>
          <b>PRICE:</b> ${product?.price}
        </p>
      </article>
    </main>
  );
}
