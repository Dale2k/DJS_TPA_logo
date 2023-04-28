const questions = [
  // WHEN I am prompted for text
  {
    name: "text",
    message: "Choose three characters for the text",
    type: "input",
  },

  //WHEN I am prompted for the text color
  {
    name: "textColor",
    message: "Choose the text color ",
    type: "list",
    choices: [
      "blue",
      "green",
      "red",
      "yellow",
      "white",
      "orange",
      "brown",
      "purple",
      "black",
      "gold",
      "goldenrod",
      "pink",
      "gray",
      "silver",
    ],
  },

  // WHEN I am prompted for a shape
  {
    name: "shape",
    message: "Choose a shape",
    type: "list",
    choices: ["Circle", "Square", "Triangle"],
  },

  // WHEN I am prompted for the shape's color

  {
    name: "shapeColor",
    message: "Choose a shape color ",
    type: "list",
    choices: [
      "blue",
      "green",
      "red",
      "yellow",
      "white",
      "orange",
      "brown",
      "purple",
      "black",
      "gold",
      "goldenrod",
      "pink",
      "gray",
      "silver",
    ],
  },
];

module.exports = questions;
