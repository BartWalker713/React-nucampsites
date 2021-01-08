import { createStore } from 'redux';
import { Reducer, initialState } from './reducer';

export const CongigureStore = () => {
    const store = createStore(
        Reducer,
        initialState
    );

    return store;
};