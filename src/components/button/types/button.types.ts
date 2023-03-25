import { ReactNode } from 'react';

export type ButtonProps = {
  children: ReactNode;
  className: string;
  type: 'button' | 'submit' | 'reset' | undefined;
  event: () => void;
};
