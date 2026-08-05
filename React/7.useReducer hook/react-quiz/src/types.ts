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
}

export type Action =
  | { type: 'dataReceived'; payload: Questions[] }
  | { type: 'dataFailed' }
  | { type: 'start' };
