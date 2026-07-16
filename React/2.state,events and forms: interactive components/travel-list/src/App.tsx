import './index.css';
import Form from './components/Form';
import Logo from './components/Logo';
import PackingList from './components/PackingList';
import Stats from './components/Stats';
import { useState } from 'react';

export interface ItemType {
  id: number;
  description: string;
  quantity: number;
  packed: boolean;
}

function App() {
  const [items, setItems] = useState<ItemType[]>([]);

  function handAddItems(item: ItemType) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id: number) {
    setItems((item) => item.filter((i) => i.id !== id));
  }

  function handleToggleItem(id: number) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item,
      ),
    );
  }

  return (
    <>
      <Logo />
      <Form onAddItems={handAddItems} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItem}
        onToggleItems={handleToggleItem}
      />
      <Stats />
    </>
  );
}

export default App;
