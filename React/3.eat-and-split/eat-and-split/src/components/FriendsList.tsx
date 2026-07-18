import { initialFriends } from '../data';

export default function FriendsList() {
  const friends = initialFriends;
  return (
    <>
      <ul>
        {friends.map((friend) => (
          <li key={friend.id}>
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
            {friend.balance === 0 && (
              <p>
                You owe {friend.name} {Math.abs(friend.balance)}
              </p>
            )}
            <button className='button'>Select</button>
          </li>
        ))}
      </ul>
      
    </>
  );
}
