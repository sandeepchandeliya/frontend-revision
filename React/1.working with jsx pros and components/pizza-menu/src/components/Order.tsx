interface OrderProps {
  closeHour: number;
}

export default function Order(props: OrderProps) {
  return (
    <>
      <div className="order">
        <p>
          We're open until {props.closeHour}:00. Come visit us or order online.
        </p>
        <button className="btn">Order</button>
      </div>
    </>
  );
}
