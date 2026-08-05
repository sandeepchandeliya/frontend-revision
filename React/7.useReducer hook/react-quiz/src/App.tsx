import { useEffect, useReducer } from 'react';
import Main from './components/Main';
import Header from './Header';
import type { Action, State } from './types';
import Loader from './Loader';
import ErrorMessage from './Error';
import StartScreen from './components/StartScreen';
import Question from './components/Question';

const initialState: State = {
  questions: [],
  status: 'loading',
  index:0,
  answer:null 
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
    default:
      throw new Error('Unknown action');
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { questions, status, index } = state;
  const numQuestions = questions.length;

  useEffect(function () {
    fetch('http://localhost:8000/questions')
      .then((res) => {
        // console.log("Status:", res.status);
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
          {status === 'active' && <Question question={questions[index]} />}
        </Main>
      </div>
    </>
  );
}

export default App;
