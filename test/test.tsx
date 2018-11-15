import * as React from "react";
import { mount } from "enzyme";

describe("test", () => {
  it("test", () => {
    mount(<div>Hello</div>);
    expect(1).toBe(1);
  });
});

describe("test2", () => {
  it("test", () => {
    mount(<div>Hello</div>);
    expect(1).toBe(1);
  });
});

// time TS_NODE_COMPILER_OPTIONS='{"module":"commonjs"}' mocha --require ./setup --watch-extensions tsx,ts --watch test/**/*.{ts,tsx}"