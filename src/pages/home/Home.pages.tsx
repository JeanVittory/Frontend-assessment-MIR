import { Spinner } from '@components/spinner';
import { Error } from '@components/error';
import { Heading } from '@components/heading';
import { ProductCard } from '@components/productCard';
import { useGetProductsQuery } from '../../service';
import { GetProducts } from '@service/types';
import './home.pages.scss';

export default function Home(): JSX.Element {
  const { data, isError, isLoading, error } = useGetProductsQuery();

  if (isLoading) {
    return <Spinner />;
  }

  if (isError || !data?.length) {
    const { status, error: errorMessage } = error as any;
    return <Error status={status} error={errorMessage} />;
  }
  return (
    <main className="main">
      <Heading className="heading">PRODUCTS</Heading>
      {data.map((product: GetProducts) => {
        return <ProductCard {...product} />;
      })}
    </main>
  );
}

//
