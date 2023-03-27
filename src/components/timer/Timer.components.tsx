import { useState, useEffect } from 'react';
import { TimerProps } from './types';
import { useCountDown } from '@hooks/index';

import './timer.components.scss';

export default function Timer({ minutes, seconds }: TimerProps): JSX.Element {
  const { sec, min, isAllowed } = useCountDown(minutes, seconds);

  return (
    <span className={`${min === 0 && sec < 20 && 'alert'}`}>
      <b>
        {min < 10 ? '0' + min : min}:{sec < 10 ? '0' + sec : sec}
      </b>
    </span>
  );
}
