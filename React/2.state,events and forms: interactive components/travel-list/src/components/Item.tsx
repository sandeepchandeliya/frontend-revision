import { type ItemType } from '../App';
interface ItemProps {
  item: ItemType;
  onDeleteItems: (id: number) => void;
  onToggleItems: (id: number) => void;
}

export default function Item({
  item,
  onDeleteItems,
  onToggleItems,
}: ItemProps) {
  return (
    <>
      <li>
        <input
          type="checkbox"
          checked={item.packed}
          onChange={() => onToggleItems(item.id)}
        />
        <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
          {item.quantity} {item.description}
        </span>
        <button onClick={() => onDeleteItems(item.id)}>❌</button>
      </li>
    </>
  );
}
