const inquirer = require('inquirer');
const {Triangle, Circle, Square} = require('./lib/Shapes');
const  {generateSVG}  = require('./lib/writer');

const wait = () =>
    new Promise((resolve, reject) => {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'logoName',
                    message: 'Enter 3 characters to appear on your logo: ',
                },
                {
                    type: 'input',
                    name: 'textColor',
                    message: 'Enter a color keyword (or a hexadecimal number) for the text:',
                },
                {
                    type: 'list',
                    name: 'shape',
                    message: 'Please choose a shape for your logo:',
                    choices: ['circle', 'triangle', 'square']
                },
                {
                    type: 'input',
                    name: 'shapeColor',
                    message: 'Enter a color keyword (or a hexadecimal number) for the shape:',
                },
            ]).then( (data) => {
                let svg;
                if (data.logoName.length > 3) reject(new Error('Please enter only 3 characters for the logo')); //if the user didn't read the prompt, this error will stop the function in its tracks, logo object will not be created
                switch (data.shape) {
                    case 'circle':
                        svg = new Circle(data.shapeColor, data.logoName, data.textColor);
                        break;
                    case 'triangle':
                        svg = new Triangle(data.shapeColor, data.logoName, data.textColor);
                        break;
                    case 'square':
                        svg = new Square(data.shapeColor, data.logoName, data.textColor);
                        break;  
                }
                return svg;
            }).then( (svg) => resolve(svg)) //sends the program to line 50 where it can continue with svg
              .catch((err) => reject(err)); //this catches any error that isn't the one thrown on line 32
    });

    wait()
        .then((svg) => {
            console.log('Logo created!');
            generateSVG(svg);
            return svg;
        }).catch((err) => console.log(err))

module.exports = { wait }; //exported to be used for testing