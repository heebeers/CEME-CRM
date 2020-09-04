import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";

configure({ adapter: new Adapter() });
describe("Component: App", () => {
  /* Testing that Clock is rendering */

  it("It renders without errors", () => {
    expect(shallow(<App />).length).toEqual(1);
  });
});
