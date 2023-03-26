import errorImage from '@assets/computer-troubleshooting.svg';
import { SerializedError } from '@reduxjs/toolkit/dist/createAsyncThunk';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query/fetchBaseQuery';
import './error.components.scss';

type errorProp = {
  status?: string;
  error?: string;
};

export default function Error({
  error = 'Please call to your nearest dev',
  status = 'error unknown',
}: errorProp): JSX.Element {
  return (
    <div className="error-container">
      <div className="error-image-container">
        <img
          src={errorImage}
          alt="error"
          className="error-image-container__image"
        />
      </div>
      <div>
        <p className="error-container__title">SOMETHING WENT WRONG</p>
        <ul className="error-container__ul">
          <li className="error-container__li">{error}</li>
          <li className="error-container__li">{status}</li>
        </ul>
      </div>
    </div>
  );
}
