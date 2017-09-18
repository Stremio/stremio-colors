var fs = require('fs');
var colors = require('./colors.js');

var STYL_FILE_PATH = './colors.styl';

fs.writeFileSync(STYL_FILE_PATH, getStylContent(), function(err) {
    if(err) {
        throw console.error(err);
    }
});

function getStylContent() {
    return Object.keys(colors)
        .map(function(colorName) {
            return '$' + colorName + ' = rgba(' + colors[colorName] +')';
        })
        .join('\n');
}
