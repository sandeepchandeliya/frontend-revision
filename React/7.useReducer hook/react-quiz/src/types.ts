import type { Dispatch } from 'react';

export interface Questions {
  question: string;
  options: string[];
  correctOption: number;
  points: number;
}

type Status = 'loading' | 'error' | 'active' | 'finished' | 'ready';

export interface State {
  questions: Questions[];
  status: Status;
  index: number;
  answer: null | number;
  points: number;
  highscore: number;
  secondsRemaining: number;
}

export type Action =
  | { type: 'dataReceived'; payload: Questions[] }
  | { type: 'dataFailed' }
  | { type: 'start' }
  | { type: 'newAnswer'; payload: number | null }
  | { type: 'nextQuestion' }
  | { type: 'finish' }
  | { type: 'restart' }
  | { type: 'tick' };

export interface QuestionProps {
  question: { question: string; options: string[]; correctOption: number };
  dispatch: Dispatch<Action>;
  answer: number | null;
}

export interface NextButtonProps {
  dispatch: Dispatch<Action>;
  answer: number | null;
  index: number;
  numQuestions: number;
}
