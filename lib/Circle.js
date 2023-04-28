const Shape = require("./Shape.js");

class Circle extends Shape {
  constructor(shapeColor, text, textColor) {
    super(shapeColor, text, textColor);
  }
  render() {
    return `
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="125" cy="125" r="75" fill="${this.shapeColor}" />
            <text x="130" y="145" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `;
  }
}

module.exports = Circle;
