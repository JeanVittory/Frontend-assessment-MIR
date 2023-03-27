import { SocialProps } from './types';
import './social.components.scss';

export default function Social({
  children,
  className,
  Icon,
  link,
}: SocialProps): JSX.Element {
  return (
    <div className="social-container">
      <div className="social-icon">{<Icon color="white" />}</div>
      <a href={link} className="hvr-underline-from-center" target="_blank">
        {children}
      </a>
    </div>
  );
}
