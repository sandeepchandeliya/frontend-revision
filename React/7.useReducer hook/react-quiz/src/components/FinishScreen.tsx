import type { Dispatch } from "react";
import type { Action } from "../types";

export default function FinishScreen({
  points,
  maxPossiblePoints,
  highscore,
  dispatch
}: {
  points: number;
  maxPossiblePoints: number;
  highscore: number;
  dispatch: Dispatch<Action>
}) {
  const percentage = (points / maxPossiblePoints) * 100;
  let emoji;
  if (percentage === 100) emoji = '🥇';
  if (percentage >= 80 && percentage < 100) emoji = '🥈';
  if (percentage >= 70 && percentage < 80) emoji = '🥉';
  return (
    <>
      <p className="result">
        <span>{emoji}</span>
        You scored <strong>{points}</strong> out of {maxPossiblePoints} (
        {Math.ceil(percentage)}%)
      </p>

      <p className="highscore">(HighScore: {highscore} points)</p>

      <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: 'restart' })}
        >
          Restart Quiz
        </button>
    </>
  );
}
