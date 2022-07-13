import * as types from './types';

export const inc = (payload: number) => ({type: types.INCREMENT_COUNTER, payload});
export const dec = (payload: number) => ({type: types.DECREMENT_COUNTER, payload});
export const del = (payload: number) => ({type: types.DELETE_COUNTER, payload});
export const add = () => ({type: types.ADD_COUNTER});