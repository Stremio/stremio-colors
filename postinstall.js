const fs = require('fs');
const colors = require('./colors.js');

const STYL_FILE_PATH = './colors.styl';
const ANDROID_COLOR_PATH = './android/src/main/res/values/colors.xml';

fs.writeFileSync(STYL_FILE_PATH, getStylContent());
fs.writeFileSync(ANDROID_COLOR_PATH, getAndroidColorsContent());

function getStylContent() {
    return Object.keys(colors.rgba)
        .map((colorName) => `$${colorName} = ${colors.rgba[colorName]}`)
        .join('\n');
}

function getAndroidColorsContent() {
    return Object.keys(colors.argbHex)
        .map((colorName) => `\t<item name="${colorName}" type="color">${colors.argbHex[colorName]}</item>`)
        .join('\n')
        .replace(/^/, `<?xml version="1.0" encoding="utf-8"?>\n<resources>\n`)
        .concat(`\n</resources>`);
}
