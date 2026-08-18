import {createStore} from 'redux';

interface StateType {
  balance: number;
  loan: number;
  loanPurpose: string;
}

const initialState: StateType = {
  balance: 0,
  loan: 0,
  loanPurpose: '',
};

type LoanActions =
  | { type: 'account/deposit'; payload: number }
  | { type: 'account/withdraw'; payload: number }
  | { type: 'account/requestLoan'; payload: number }
  | { type: 'account/payLoan' };

function reducer(state = initialState, action: LoanActions) {
  switch (action.type) {
    case 'account/deposit':
      return { ...state, balance: state.balance + action.payload };

    case 'account/withdraw':
      return { ...state, balance: state.balance - action.payload };

    case 'account/requestLoan':
      if (state.loan > 0) return;
      return { ...state, loan: action.payload };

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


const store = createStore(reducer);