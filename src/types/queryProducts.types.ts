import { GetProducts } from '@service/types';

export type ReturnQueryProduct = {
  data: GetProducts[];
  isError?: boolean;
  isLoading?: boolean;
  error?: any;
};
