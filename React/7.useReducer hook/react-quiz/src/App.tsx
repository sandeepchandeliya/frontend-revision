import { useEffect, useReducer } from 'react';
import Main from './components/Main';
import Header from './Header';
type State = {
  questions: [];
  status: string;
};

type Action = { type: 'dataRecieved' , payload:{} } | { type: 'dataFailed' };

const initialState = {
  questions: [],

  // "loading" "error" "ready" "active" "finished"
  status: 'loading',
};

function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'dataRecieved':
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
    default:
      throw new Error('Action unknown');
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(function () {
    fetch('http://localhost:8000/questions')
      .then((res) => res.json())
      .then((data) => dispatch({ type: 'dataRecieved', payload: data }))
      .catch((err) => dispatch({ type: 'datafailed' }));
  }, []);
  return (
    <>
      <div className="app">
        {/* <DateCounter/> */}
        <Header />
        <Main>
          <p>1/15</p>
          <p>Question?</p>
        </Main>
      </div>
    </>
  );
}

export default App;
