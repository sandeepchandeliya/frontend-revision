import { type FriendsListProp } from '../types';

export default function FriendsList({
  friends,
  onSelect,
  selectedFriend,
}: FriendsListProp) {
  return (
    <>
      <ul>
        {friends.map((friend) => {
          const isSelected = selectedFriend?.id === friend.id;

          return (
            <li key={friend.id} className={isSelected ? 'selected' : ''}>
              <img src={friend.image} alt={friend.name} />
              <h3>{friend.name}</h3>

              {friend.balance < 0 && (
                <p className="red">
                  You owe {friend.name} {Math.abs(friend.balance)}
                </p>
              )}

              {friend.balance > 0 && (
                <p className="green">
                  {friend.name} owes you {Math.abs(friend.balance)}
                </p>
              )}

              {friend.balance === 0 && <p>You and {friend.name} are even.</p>}

              <button className="button" onClick={() => onSelect(friend)}>
                {isSelected ? 'Close' : 'Select'}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
