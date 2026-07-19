import { useState, type SyntheticEvent } from 'react';
import type { FormSplitBillProps } from '../types';

export default function FormSplitBill({
  selected,
  onSplit,
}: FormSplitBillProps) {
  const [bill, setBill] = useState(0);
  const [paidByUser, setPaidByUser] = useState(0);
  const paidByFriend = bill ? bill - paidByUser : 0;
  const [paidByWho, setPaidByWho] = useState('user');

  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();

    if (!bill || !paidByUser) return;

    onSplit(paidByWho === 'user' ? paidByFriend : -paidByUser);
  }

  return (
    <>
      <form className="form-split-bill" onSubmit={handleSubmit}>
        <h2>Split a bill with {selected.name}</h2>
        <label>💰Bill Value</label>
        <input
          type="text"
          value={bill}
          onChange={(e) => setBill(+e.target.value)}
        />

        <label>Your Expense</label>
        <input
          type="text"
          value={paidByUser}
          onChange={(e) => {
            const value = +e.target.value;
            setPaidByUser(value > bill ? paidByUser : value);
          }}
        />

        <label>{selected.name}'s expense</label>
        <input type="text" disabled value={paidByFriend} />

        <label>🤑 Who is paying the bill</label>
        <select
          value={paidByWho}
          onChange={(e) => setPaidByWho(e.target.value)}
        >
          <option value="user">You</option>
          <option value="friend">{selected.name}</option>
        </select>
        <button className="button">Split bill</button>
      </form>
    </>
  );
}
