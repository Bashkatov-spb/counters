import React, { useEffect } from 'react';
import { store } from '../store';
import { IActionsToProps, IState } from '../types/counter';
import * as actions from '../store/actions/actions';
import { connect } from 'react-redux';

const CounterItem: React.FC<IActionsToProps> = ({ id, inc, dec, del}) => {

  const { counters } = store.getState();
  const hideButton = id !== 0 && (id + 1) % 4 === 0;
  useEffect(() => {
    if (hideButton) {
      let timerID = setInterval(() => inc(id), 1000);
      return () => clearInterval(timerID);
    }
  }, [])
  
  return (
    <div className="counter__container">
        <h1>Counter: {counters[id]}</h1>
        <div className="counter__buttons">
          {!hideButton && <button onClick={() => inc(id)} type="button" className="btn btn-outline-primary">+</button>}
          {!hideButton && <button onClick={() => dec(id)} type="button" className="btn btn-outline-success">-</button>}

          <button onClick={() => del(id)} type="button" className="btn btn-outline-danger">Delete counter</button>
        </div>
    </div>
  )
}

const mapStateToProps = (state: IState) => {
  return {
    state
  }
}

export default connect(mapStateToProps, actions)(CounterItem);