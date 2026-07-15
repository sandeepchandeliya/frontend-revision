import Pizza from './Pizza';
import { pizzaData } from '../data';
export default function Menu() {
  return (
    <>
      {/* <h2 style={{ color: 'violet' }}>Our Menu</h2> */}
      <h2 style={{ fontSize: '40px', fontWeight: 'bolder', color: '#FBC02D' }}>
        Our Menu
      </h2>
      {/* <Pizza
        name="Pizza Margherita"
        ingredients="Tomato and mozarella"
        price={10}
        photoName="pizzas/margherita.jpg"
      /> */}
      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza
            key={pizza.name}
            name={pizza.name}
            ingredients={pizza.ingredients}
            price={pizza.price}
            photoName={pizza.photoName}
            soldOut={pizza.soldOut}
          />
        ))}
      </ul>
    </>
  );
}
