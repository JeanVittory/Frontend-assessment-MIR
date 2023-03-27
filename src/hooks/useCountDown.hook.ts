import { useState, useEffect } from 'react';
import { ReturnUseCountDown } from './types';

export default function useCountDown(
  seconds: number,
  minutes: number
): ReturnUseCountDown {
  const [sec, setSec] = useState<number>(seconds);
  const [min, setMin] = useState<number>(minutes);
  const [isAllowed, setIsAllowed] = useState<boolean>(true);

  let timer: ReturnType<typeof setInterval>;

  useEffect(() => {
    if (min === 0 && sec === 0) {
      setIsAllowed(false);
      return;
    }
    timer = setInterval(() => {
      setSec((prev) => prev - 1);

      if (sec === 0) {
        setMin((prev) => prev - 1);
        setSec(59);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [sec]);

  return { sec, min, isAllowed };
}
