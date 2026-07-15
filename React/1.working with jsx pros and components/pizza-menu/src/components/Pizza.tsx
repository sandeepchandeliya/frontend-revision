// import pizza1 from '../../public/pizzas/margherita.jpg';

interface PizzaProps {
  name: string;
  ingredients: string;
  price: number;
  photoName: string;
  soldOut: boolean;
}

export default function Pizza(props: PizzaProps) {
  return (
    <>
      <li className={`pizza ${props.soldOut ? 'sold-out' : ''}`}>
        <img src={props.photoName} alt={props.photoName} />
        <div>
          <h2>{props.name}</h2>
          <p>{props.ingredients}</p>
          <span>{props.soldOut ? 'Sold Out' : props.price}</span>
        </div>
      </li>
    </>
  );
}
