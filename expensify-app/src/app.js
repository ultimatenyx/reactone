import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import {addExpense,editExpense,removeExpense} from "./actions/expenses";
import { setTextFilter } from './actions/filters';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();


store.dispatch(addExpense({description:'Electricity Bill',amount:3000,createdAt:1}));
store.dispatch(addExpense({description:'Water Bill',amount:25000,createdAt:2}));
store.dispatch(setTextFilter('bill'));
// store.dispatch(setTextFilter('water'));
// console.log(store.getState());
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
console.log(visibleExpenses);


ReactDOM.render(<AppRouter />, document.getElementById('app'));