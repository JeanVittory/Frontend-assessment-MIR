import { Heading } from '@components/heading';
import { useGetProductsQuery } from '../../service';
import './home.pages.scss';

export default function Home() {
  const { data, isError, isLoading, error } = useGetProductsQuery();

  return (
    <main className="main">
      <Heading className="heading">PRODUCTOS</Heading>
    </main>
  );
}
