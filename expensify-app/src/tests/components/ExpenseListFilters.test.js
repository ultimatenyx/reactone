// import React from "react";
// import { shallow } from "enzyme";
// import ExpenseListFilters from "../../components/ExpenseListFilters";
// import { filters, altFilters } from "../fixtures/filters";

// let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

// beforeEach(() => {
//   setTextFilter = jest.fn();
//   sortByDate = jest.fn();
//   sortByAmount = jest.fn();
//   setStartDate = jest.fn();
//   setEndDate = jest.fn();
//   wrapper = shallow(
//     <ExpenseListFilters
//       filters={filters}
//       setTextFilter={setTextFilter}
//       sortByDate={sortByDate}
//       sortByAmount={sortByAmount}
//       setStartDate={setStartDate}
//       setEndDate={setEndDate}
//       store={store}
//     />
//   );
// });

// test("should render ExpenseFilters correctly", () => {
//   expect(wrapper).toMatchSnapshot();
// });

// test("should render ExpenseFilters with alt data correctly", () => {
//   wrapper.setProps({
//     filters: altFilters,
//   });
//   expect(wrapper).toMatchSnapshot();
// });

// test("should handle text change", () => {
//   const value = "rent";
//   wrapper.find("input").simulate("change", {
//     target: { value },
//   });
//   expect(setTextFilter).toHaveBeenLastCalledWith(value);
// });

// test("should sort by Date", () => {
//   const value = "date";
//   wrapper.setProps({
//     filters: altFilters,
//   });
//   wrapper.find("select").simulate("change", {
//     target: { value },
//   });
//   expect(sortByDate).toHaveBeenCalled();
// });

test("", () => {});
