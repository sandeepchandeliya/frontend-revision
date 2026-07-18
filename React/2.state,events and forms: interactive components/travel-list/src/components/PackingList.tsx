// import { initialItems } from './data.ts';
import Item from './Item.tsx';
import { type ItemType } from '../App.tsx';
import { useState } from 'react';

interface PackingListProps {
  items: ItemType[];
  onDeleteItems: (id: number) => void;
  onToggleItems: (id: number) => void;
  onClearList: () => void;
}

export default function PackingList({
  items,
  onDeleteItems,
  onToggleItems,
  onClearList,
}: PackingListProps) {
  const [sortBy, setSortBy] = useState('input');

  // let sortedItems;
  let sortedItems = items;
  if (sortBy === 'input') sortedItems = items;
  if (sortBy === 'description')
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === 'packed')
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <>
      <div className="list">
        <ul>
          {sortedItems.map((item) => (
            <Item
              key={item.id}
              item={item}
              onDeleteItems={onDeleteItems}
              onToggleItems={onToggleItems}
            />
          ))}
        </ul>
        <div className="actions">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">Sort by Input order</option>
            <option value="description">Sort by description</option>
            <option value="packed">Sort by packed status</option>
          </select>
          <button onClick={onClearList}>Clear List</button>
        </div>
      </div>
    </>
  );
}
