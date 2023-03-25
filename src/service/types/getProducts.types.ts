export type GetProducts = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: rate;
};

type rate = {
  rate: number;
  count: number;
};
