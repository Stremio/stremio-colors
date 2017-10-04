var fs = require('fs');
var colors = require('./colors.json');

var STYL_FILE_PATH = './colors.styl';

fs.writeFileSync(STYL_FILE_PATH, getStylContent());

function getStylContent() {
    return Object.keys(colors)
        .map(function(colorName) {
            return '$' + colorName + ' = rgba(' + colors[colorName] +')';
        })
        .join('\n');
}
