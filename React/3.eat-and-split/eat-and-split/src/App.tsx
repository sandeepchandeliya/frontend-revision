import { useState } from 'react';
import FormAddFriend from './components/FormAddFriend';
import FormSplitBill from './components/FormSplitBill';
import FriendsList from './components/FriendsList';

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  function handleClick() {
    setShowAddFriend((show) => !show);
  }
  return (
    <>
      <div className="app">
        <div className="sidebar">
          <FriendsList />
          {showAddFriend && <FormAddFriend />}
          <button className="button" onClick={handleClick}>
            {showAddFriend ? 'Close' : 'Add Friends'}
          </button>
        </div>
        <FormSplitBill />
      </div>
    </>
  );
}

export default App;
