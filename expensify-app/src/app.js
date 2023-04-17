import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense, removeExpense, editExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const store = configureStore();
console.log(store.getState());

store.dispatch(
  addExpense({ description: "Water Bill", amount: 1000, createdAt: 1000 })
);
store.dispatch(
  addExpense({ description: "Gas Bill", amount: 1050, createdAt: 1001 })
);
store.dispatch(setTextFilter("bill"));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

ReactDOM.render(<AppRouter />, document.getElementById("app"));
