import { Spinner } from '@components/spinner';
import { Error } from '@components/error';
import { Heading } from '@components/heading';
import { ProductCard } from '@components/productCard';
import { useGetProductsQuery } from '@service/products.service';
import { GetProducts } from '@service/types';
import { ReturnQueryProduct } from '../../types';
import './home.pages.scss';

export default function Home(): JSX.Element {
  const { data, isError, isLoading, error } =
    useGetProductsQuery<ReturnQueryProduct>();
  if (isLoading) return <Spinner />;

  if (isError || !data?.length) {
    const { status, error: errorMessage } = error as any;
    return <Error status={status} error={errorMessage} />;
  }

  return (
    <main className="main">
      <Heading className="main__heading">PRODUCTS</Heading>
      <section className="main__products" data-aos="fade-right">
        {data.map((product: GetProducts) => {
          return <ProductCard key={product.id} {...product} />;
        })}
      </section>
    </main>
  );
}

//
