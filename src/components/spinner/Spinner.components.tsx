import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';
import './spinner.components.scss';

export default function Spinner(): JSX.Element {
  return (
    <div className="spinner">
      <ClimbingBoxLoader />
    </div>
  );
}
