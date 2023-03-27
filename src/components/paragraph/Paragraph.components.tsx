import { ParagraphProps } from './types';
import './paragraph.components.scss';

export default function Paragraph({
  children,
  className,
}: ParagraphProps): JSX.Element {
  return <p className={`${className} paragraph`}>{children}</p>;
}
