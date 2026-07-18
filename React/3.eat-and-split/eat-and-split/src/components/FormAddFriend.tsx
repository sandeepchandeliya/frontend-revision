import { useState, type SyntheticEvent } from 'react';

export default function FormAddFriend() {
  const [name, setName] = useState('');
  const [image, setImage] = useState('https://i.pravatar.cc/48');

  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();

    if (!name || !image) return;
    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };
    console.log(newFriend);
    setName('');
    setImage('https://i.pravatar.cc/48');
  }

  return (
    <>
      <form className="form-add-friend" onSubmit={handleSubmit}>
        <label>👬Friend name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>🎆Image Url</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <button className="button">Select</button>
      </form>
    </>
  );
}
