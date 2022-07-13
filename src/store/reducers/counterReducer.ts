import { 
  ICounterAction, 
  IState 
} from "../../types/counter";

const initialState: IState = {
  counters: [0]
}

export const counterReducer = (state = initialState, action: ICounterAction): IState => {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return {...state, counters: state.counters.map((item, idx) => action.payload === idx ? item + 1: item)};
    case 'DECREMENT_COUNTER':
      return {...state, counters: state.counters.map((item, idx) => action.payload === idx ? item - 1: item)};
    case 'ADD_COUNTER':
      return {...state, counters: [...state.counters, state.counters.reduce((acc, item) => acc += item, 0)]};
    case 'DELETE_COUNTER':
      return {...state, counters: state.counters.filter((item, idx) => action.payload !== idx)};
    default: 
      return state;
  }
}

export type RootState = ReturnType<typeof counterReducer>;