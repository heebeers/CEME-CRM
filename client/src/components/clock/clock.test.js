import React from "react";
import Clock from "./Clock";
import { Item } from "semantic-ui-react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import expect from "expect";

configure({ adapter: new Adapter() });

describe("Component: Clock", () => {
  /* Testing that Clock is rendering */

  it("It renders without errors", () => {
    expect(shallow(<Clock />).length).toEqual(1);
  });

  it("It should display 6 Headings/TimeZones", () => {
    const clock = shallow(<Clock />);

    expect(clock.find("Header").length).toEqual(6);
  });
});
