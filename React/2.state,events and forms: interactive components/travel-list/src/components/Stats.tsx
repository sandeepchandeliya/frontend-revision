import type { ItemType } from '../App';

interface ItemsProp {
  items: ItemType[];
}

export default function Stats({ items }: ItemsProp) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list🚀</em>
      </p>
    );
  const numsItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numsItems) * 100);
  return (
    <>
      <footer className="stats">
        <em>
          {percentage === 100
            ? 'You got everything! Ready to go✈️'
            : `🧳You have ${numsItems} items on your list and you have already packed
          ${numPacked} ${percentage}%`}
        </em>
      </footer>
    </>
  );
}
