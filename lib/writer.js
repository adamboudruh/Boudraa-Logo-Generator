const {Triangle, Circle, Square} = require('./Shapes');
const { writeFile } = require('fs/promises'); //fs.promises.writeFile is used because it allows for easier error catching

const generateSVG = (logo) => {
    writeFile(`./examples/${logo.text}.svg`, (`
<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
${logo.render()}
 <text x="150" y="120" font-size="60" text-anchor="middle" fill="white">${logo.text}</text>
</svg>
`)).then( () => console.log("Success! File written successfully."))
  .catch((err) => console.log("Error writing file: ", err))};

module.exports = { generateSVG };