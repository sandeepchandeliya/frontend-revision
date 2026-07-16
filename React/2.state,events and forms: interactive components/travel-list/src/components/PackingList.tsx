// import { initialItems } from './data.ts';
import Item from './Item.tsx';
import { type ItemType } from '../App.tsx';

interface PackingListProps {
  items: ItemType[];
  onDeleteItems: (id: number) => void;
  onToggleItems: (id: number) => void;
}

export default function PackingList({
  items,
  onDeleteItems,
  onToggleItems,
}: PackingListProps) {
  return (
    <>
      <div className="list">
        <ul>
          {items.map((item) => (
            <Item
              key={item.id}
              item={item}
              onDeleteItems={onDeleteItems}
              onToggleItems={onToggleItems}
            />
          ))}
        </ul>
      </div>
    </>
  );
}
