const Triangle = require("../Triangle.js");

describe("Triangle", () => {
  it("should return logo with user choice of shape color, text, and text color", () => {
    const triangle = new Triangle("blue", "DJS", "blue");

    expect(triangle.render()).toEqual(`

        <svg version="1.1" 

            width="300" height="200"

            xmlns="http://www.w3.org/2000/svg">

            <polygon points="150, 18 244, 182 56, 182" fill="blue"/>

            <text x="150" y="155" font-size="60" text-anchor="middle" fill="blue">DJS</text>

        </svg>

        `);
  });
});
