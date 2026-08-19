import { combineReducers, createStore } from 'redux';

interface StateTypeAccount {
  balance: number;
  loan: number;
  loanPurpose: string;
}

const initialStateAccount: StateTypeAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: '',
};

interface StateTypeCustomer {
  fullName: string;
  nationalID: string;
  createdAt: string;
}

const initialStateCustomer: StateTypeCustomer = {
  fullName: '',
  nationalID: '',
  createdAt: '',
};

type LoanActions =
  | { type: 'account/deposit'; payload: number }
  | { type: 'account/withdraw'; payload: number }
  | {
      type: 'account/requestLoan';
      payload: {
        amount: number;
        purpose: string;
      };
    }
  | { type: 'account/payLoan' };

function accountReducer(state = initialStateAccount, action: LoanActions) {
  switch (action.type) {
    case 'account/deposit':
      return { ...state, balance: state.balance + action.payload };

    case 'account/withdraw':
      return { ...state, balance: state.balance - action.payload };

    case 'account/requestLoan':
      if (state.loan > 0) return;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };

    case 'account/payLoan':
      return {
        ...state,
        loan: 0,
        loanPurpose: '',
        balance: state.balance - state.loan,
      };
    default:
      return state;
  }
}

type CustomerAction =
  | {
      type: 'customer/createCustomer';
      payload: { fullName: string; nationalID: string; createdAt: string };
    }
  | { type: 'cutsomer/updateName'; payload: { fullName: string } };

function customerReducer(state = initialStateCustomer, action: CustomerAction) {
  switch (action.type) {
    case 'customer/createCustomer':
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };
    case 'cutsomer/updateName':
      return { ...state, fullName: action.payload.fullName };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);

// store.dispatch({ type: 'account/deposit', payload: 500 });
// store.dispatch({ type: 'account/withdraw', payload: 200 });
// console.log(store.getState());

// store.dispatch({
//   type: 'account/requestLoan',
//   payload: {
//     amount: 1000,
//     purpose: 'buy a car',
//   },
// });

// console.log(store.getState());

// store.dispatch({ type: 'account/payLoan' });

// console.log(store.getState());

function deposit(amount: number) {
  return { type: 'account/deposit', payload: amount };
}

store.dispatch(deposit(500));
// console.log(store.getState());

function createCustomer(fullName: string, nationalID: string) {
  return {
    type: 'customer/createCustomer',
    payload: {
      fullName,
      nationalID,
      createdAt: new Date().toISOString(),
    },
  };
}
function updateName(fullName:string) {
  return { type: 'account/updateName', payload: fullName };
}


store.dispatch(createCustomer("Sandeep Chandeliya","245465"));
console.log(store.getState());