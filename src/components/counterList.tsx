import React from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import CounterItem from './counterItem';
import { add } from '../store/actions/actions';
import { connect } from 'react-redux';
import { IAddToProps } from '../types/counter';

const CounterList: React.FC<IAddToProps> = ({ add }) => {
  const { counters } = useTypedSelector(state => state);
  const listItems = counters.map((item, idx) => {
    let id = {id: idx}
    return (
      <div key={idx}>
        <CounterItem {...id}/>
      </div>
    )
  })

  return (
    <div className="main">
      <button onClick={() => add()} type="button" className="btn btn-outline-secondary">Add counter</button>
      {listItems}
    </div>
  )
}

export default connect(null, { add })(CounterList);