import { useEffect, useReducer } from 'react';
import Main from './components/Main';
import Header from './Header';
import type { Action, State } from './types';
import Loader from './Loader';
import ErrorMessage from './Error';
import StartScreen from './components/StartScreen';
import Question from './components/Question';
import NextButton from './components/NextButton';
import Progress from './components/Progress';

const initialState: State = {
  questions: [],
  status: 'loading',
  index: 0,
  answer: null,
  points: 0,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'dataReceived':
      return {
        ...state,
        questions: action.payload,
        status: 'ready',
      };
    case 'dataFailed':
      return {
        ...state,
        status: 'error',
      };
    case 'start':
      return { ...state, status: 'active' };
    case 'newAnswer': {
      const question = state.questions.at(state.index);

      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question?.correctOption
            ? state.points + question.points
            : state.points,
      };
    }
    case 'nextQuestion':
      return { ...state, index: state.index + 1, answer: null };
    default:
      throw new Error('Unknown action');
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { questions, status, index, answer, points } = state;
  const numQuestions = questions.length;
  const maxPossiblePoints = questions.reduce(
    (prev, curr) => prev + curr.points,
    0,
  );

  useEffect(function () {
    fetch('http://localhost:8000/questions')
      .then((res) => {
        console.log('Status:', res.status);
        return res.json();
      })
      .then((data) => {
        // console.log('data', data)
        dispatch({ type: 'dataReceived', payload: data });
      })
      .catch(() => dispatch({ type: 'dataFailed' }));
  }, []);
  return (
    <>
      <div className="app">
        {/* <DateCounter/> */}
        <Header />
        <Main>
          {status === 'loading' && <Loader />}
          {status === 'error' && <ErrorMessage />}
          {status === 'ready' && (
            <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
          )}
          {status === 'active' && (
            <>
              <Progress
                index={index}
                numQuestions={numQuestions}
                points={points}
                maxPossiblePoints={maxPossiblePoints}
                answer={answer}
              />
              <Question
                question={questions[index]}
                dispatch={dispatch}
                answer={answer}
              />
              <NextButton dispatch={dispatch} answer={answer} />
            </>
          )}
        </Main>
      </div>
    </>
  );
}

export default App;
