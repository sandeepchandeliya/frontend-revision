import Main from './components/Main';
import Header from './Header';

function App() {
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
