const inquirer = require('inquirer');
const { wait } = require('./../index');
const {Triangle, Circle, Square} = require('./Shapes');
const  {generateSVG}  = require('./writer');

jest.mock('inquirer');

//Tests that the promise does not resolve with an invalid logo name
describe('wait function', () => {
    it('should reject any logo name with more than 3 characters', async () => {
      inquirer.prompt.mockResolvedValue({
        logoName: 'abcdefg',
        textColor: 'blue',
        shape: 'square',
        shapeColor: 'green',
      });
  
      return expect(wait()).rejects.toThrow('Please enter only 3 characters for the logo');
    });
  });

//Confirms that render function produces proper string
describe('render function', () => {
    it('should return the correct string for the SVG file', () => {
        const shape = new Triangle('blue', 'fff', 'white');
        expect(shape.render()).toEqual('<polygon points="150,0 60,150 240,150" fill="blue" />')
    });
});

//Confirms that the shape functions properly inherit the shape class
describe('shape constructors', () => {
  it('should create a shape object with all the correct fields', () => {
      const shape = new Square('red', 'POG', 'green');
      expect(shape).toHaveProperty('shapeColor', 'red');
      expect(shape).toHaveProperty('text', 'POG');
      expect(shape).toHaveProperty('textColor', 'green');
  });
});

