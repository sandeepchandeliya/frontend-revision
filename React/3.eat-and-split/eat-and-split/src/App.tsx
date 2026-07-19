import { useState } from 'react';
import FormAddFriend from './components/FormAddFriend';
import FormSplitBill from './components/FormSplitBill';
import FriendsList from './components/FriendsList';
import { initialFriends } from './data';
import type { FriendsType } from './types';

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState<FriendsType | null>(
    null,
  );

  function handleClick() {
    setShowAddFriend((show) => !show);
  }

  function handelAddFriends(friend: FriendsType) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }

  function handleSelectedFriend(friend: FriendsType) {
    // setSelectedFriend(friend);
    setSelectedFriend((curr) => (curr?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  }

  function handleSplitbill(value: number) {
    console.log(value);
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend?.id
          ? { ...friend, balance: friend.balance + value }
          : friend,
      ),
    );

    setSelectedFriend(null);
  }
  return (
    <>
      <div className="app">
        <div className="sidebar">
          <FriendsList
            friends={friends}
            onSelect={handleSelectedFriend}
            selectedFriend={selectedFriend}
          />

          {showAddFriend && <FormAddFriend onAddFriends={handelAddFriends} />}

          <button className="button" onClick={handleClick}>
            {showAddFriend ? 'Close' : 'Add Friends'}
          </button>
        </div>

        {selectedFriend && (
          <FormSplitBill selected={selectedFriend} onSplit={handleSplitbill} />
        )}
      </div>
    </>
  );
}

export default App;
