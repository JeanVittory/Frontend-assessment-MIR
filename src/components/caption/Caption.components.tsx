import { CaptionProps } from './types/caption.types';
import './caption.components.scss';

export default function Caption({
  children,
  className,
}: CaptionProps): JSX.Element {
  return <p className={`${className} caption`}>{children}</p>;
}
