import { HeadingProps } from './types';
import './heading.components.scss';

export default function Heading({
  children,
  className,
}: HeadingProps): JSX.Element {
  return <h2 className={className}>{children}</h2>;
}
