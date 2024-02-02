class Shape {
    constructor(shapeColor, text, textColor) {
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
    }
}

class Triangle extends Shape{ //all three classes inherit the same constructor as their superclass, but each has its own render method
    render() { return `<polygon points="150,0 60,150 240,150" fill="${this.shapeColor}" />` }
}

class Circle extends Shape{
    render() { return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />` }
}

class Square extends Shape{
    render() { return `<rect width="130" height="130" x="85" y="35"fill="${this.shapeColor}"/>` }
}

module.exports = { Triangle, Circle, Square };