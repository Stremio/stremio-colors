var fs = require('fs');
var colors = require('./colors.json');

var STYL_FILE_PATH = './colors.styl';
var ANDROID_COLOR_PATH = './android/src/main/res/values/colors.xml';

fs.writeFileSync(STYL_FILE_PATH, getStylContent());
fs.writeFileSync(ANDROID_COLOR_PATH, getAndroidColorsContent());

function getStylContent() {
    return Object.keys(colors)
        .map(function(colorName) {
            return '$' + colorName + ' = rgba(' + colors[colorName] +')';
        })
        .join('\n');
}

function getAndroidColorsContent() {
    return Object.keys(colors)
        .map((colorName) => {
            const colorValues = colors[colorName].split(',');
            const red = parseInt(colorValues[0]).toString(16);
            const green = parseInt(colorValues[1]).toString(16);
            const blue = parseInt(colorValues[2]).toString(16);
            const alpha = Math.ceil(parseFloat(colorValues[3]) * 255).toString(16);
            const sanitizedColorName = colorName.replace(/-/g, '');
            return `\t<item name="${sanitizedColorName}" type="color">#${alpha}${red}${green}${blue}</item>`
        })
        .join('\n')
        .replace(/^/,`<?xml version="1.0" encoding="utf-8"?>\n<resources>\n`)
        .concat(`\n</resources>`);
}
