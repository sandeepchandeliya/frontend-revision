import { useSelector } from 'react-redux';
import type { RootState } from '../../store';

function Customer() {
  const customer = useSelector((store:RootState ) => store.customer.fullName);
  // console.log(customer);
  return <h2>👋 Welcome, {customer}</h2>;
}

export default Customer;
