export interface ICounterAction {
  type: string,
  payload?: any,
}

export interface IActionsToProps {
  id: number,
  inc: Function,
  del: Function,
  dec: Function,
}

export interface IAddToProps {
  add: Function,
}

export interface IState {
  counters: number[],
}

export interface IID {
  id: number,
}
