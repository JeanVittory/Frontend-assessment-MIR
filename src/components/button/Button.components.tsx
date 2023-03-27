import './button.components.scss';
import { ButtonProps } from './types';

export default function Button({
  children,
  className,
  type,
  event,
}: ButtonProps): JSX.Element {
  return (
    <button
      type={type}
      className={`${className} button grandient`}
      onClick={event}
    >
      {children}
    </button>
  );
}
