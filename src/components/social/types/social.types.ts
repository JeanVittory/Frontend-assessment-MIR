import { ReactNode } from 'react';
import { IconType } from 'react-icons';

export type SocialProps = {
  children: ReactNode;
  className?: string;
  Icon: IconType;
  link: string;
};
