import './heading.components.scss';
import { HeadingProps } from './types';

export default function Heading({
  children,
  className,
}: HeadingProps): JSX.Element {
  return <h2 className={className}>{children}</h2>;
}
