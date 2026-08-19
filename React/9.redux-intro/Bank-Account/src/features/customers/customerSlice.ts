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

type CustomerAction =
  | {
      type: 'customer/createCustomer';
      payload: { fullName: string; nationalID: string; createdAt: string };
    }
  | { type: 'cutsomer/updateName'; payload: { fullName: string } };

export default function customerReducer(state = initialStateCustomer, action: CustomerAction) {
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


export function createCustomer(fullName: string, nationalID: string) {
  return {
    type: 'customer/createCustomer',
    payload: {
      fullName,
      nationalID,
      createdAt: new Date().toISOString(),
    },
  };
}
export function updateName(fullName:string) {
  return { type: 'customer/updateName', payload: fullName };
}