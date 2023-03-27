import { Dispatch, SetStateAction } from 'react';

export type TimerProps = {
  minutes: number;
  seconds: number;
  setIsAllowed: Dispatch<SetStateAction<boolean>>;
};
