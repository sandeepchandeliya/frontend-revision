import { useState, type SyntheticEvent } from 'react';
import { type ItemType } from '../App';


interface FormProps{
  onAddItems :(item: ItemType) =>void;
}

export default function Form({onAddItems}:FormProps ) {
  const [description, setDescription] = useState('test');
  const [quantity, setQuantity] = useState(1);
  

  function handleSubmit(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    // console.log(e);
    const newItem = { description, quantity, packed: false, id: Date.now() };
    // console.log(newItem);

    onAddItems(newItem)

    setDescription('');
    setQuantity(1);
  }

  return (
    <>
      <form className="add-form" onSubmit={handleSubmit}>
        <h2>What do you need for your trip?😍</h2>
        <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
          {/* <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option> */}
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="item..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>Add</button>
      </form>
    </>
  );
}
