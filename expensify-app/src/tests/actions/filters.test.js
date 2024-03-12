import moment from "moment";
import {
  setStartDate,
  setEndDate,
  setTextFilter,
  sortByDate,
  sortByAmount,
} from "../../actions/filters";

test("should generate set start Date action object", () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0),
  });
});

test("should generate set end Date action object", () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: "SET_END_DATE",
    endDate: moment(0),
  });
});

test("should generate set text filter object with text value", () => {
  const action = setTextFilter("Some text");
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: "Some text",
  });
});

test("should generate set text filter object with default text value", () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: "",
  });
});
test("should generate action object for sortby date", () => {
  expect(sortByDate()).toEqual({
    type: "SORT_BY_DATE",
  });
});
test("should generate action object for sortby amount", () => {
  expect(sortByAmount()).toEqual({
    type: "SORT_BY_AMOUNT",
  });
});
