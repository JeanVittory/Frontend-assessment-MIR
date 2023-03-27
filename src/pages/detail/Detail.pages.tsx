import { useGetProductsQuery } from '@service/products.service';
import './detail.pages.scss';

export default function Detail(): JSX.Element {
  const { data } = useGetProductsQuery();
  console.log(data);

  return <main className="detail">DETAIL</main>;
}
