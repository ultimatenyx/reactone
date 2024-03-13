import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("should set default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should remove expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});
test("should not remove expenses if id is not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "-1",
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("should add an expense", () => {
  const newExpense = {
    id: "5",
    description: "Candy",
    note: "",
    amount: 1234,
    createdAt: 2000,
  };
  const action = {
    type: "ADD_EXPENSE",
    expense: newExpense,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, newExpense]);
});
test("should edit an expense", () => {
  const newExpense = {
    id: "1",
    description: "Gum &Candy",
    note: "",
    amount: 1234,
    createdAt: 2000,
  };
  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[0].id,
    updates: newExpense,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([newExpense, expenses[1], expenses[2]]);
});
test("should not edit an expense if id is not found", () => {
  const newExpense = {
    id: "1",
    description: "Gum &Candy",
    note: "",
    amount: 1234,
    createdAt: 2000,
  };
  const action = {
    type: "EDIT_EXPENSE",
    id: "-1",
    updates: newExpense,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
