/* eslint-disable @typescript-eslint/no-var-requires */

const browserlist = require("browserslist");
const config = require("../");

it("should export an array", () => {
  expect(Array.isArray(config)).toBe(true);
});

it("should not contain invalid queries", () => {
  const result = browserlist(config);
  expect(result).toBeTruthy();
});
