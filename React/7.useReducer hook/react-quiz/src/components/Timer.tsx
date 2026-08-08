import { useEffect, type Dispatch } from 'react';
import type { Action } from '../types';

export default function Timer({
  dispatch,
  secondsRemaining,
}: {
  dispatch: Dispatch<Action>;
  secondsRemaining: number;
}) {
  const mins = Math.floor(secondsRemaining / 60);
  const secs = secondsRemaining % 60;

  useEffect(
    function () {
      const id = setInterval(() => {
        dispatch({ type: 'tick' });
      }, 1000);

      return () => clearInterval(id);
    },

    [dispatch],
  );

  return (
    <>
      <div className="timer">
        {mins < 10 && '0'}
        {mins}:{secs < 10 && '0'}
        {secs}
      </div>
    </>
  );
}
