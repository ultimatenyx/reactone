import React from "react";
// import ReactShallowRenderer from "react-test-renderer/shallow";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import Header from "../../components/Header";

//react-test-renderer

test("should render Header correctly", () => {
  // const renderer = new ReactShallowRenderer();
  // renderer.render(<Header />);
  //   console.log(renderer.getRenderOutput());
  // expect(renderer.getRenderOutput()).toMatchSnapshot();
  const wrapper = shallow(<Header />);
  // expect(wrapper.find("h1").text()).toBe("Expensify");
  expect(toJSON(wrapper)).toMatchSnapshot();
});
