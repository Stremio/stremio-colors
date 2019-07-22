const fs = require('fs');
const path = require('path');
const colors = require('../colors.js');

const CSS_FILE_PATH = path.join(__dirname, '../css/stremio-colors.css');
const LESS_FILE_PATH = path.join(__dirname, '../less/stremio-colors.less');
const ANDROID_COLOR_PATH = path.join(__dirname, '../android/src/main/res/values/colors.xml');

fs.writeFileSync(CSS_FILE_PATH, getCssContent());
fs.writeFileSync(LESS_FILE_PATH, getLessContent());
fs.writeFileSync(ANDROID_COLOR_PATH, getAndroidColorsContent());

function getCssContent() {
    return Object.keys(colors.rgba)
        .map((colorName) => `--color-${colorName}: ${colors.rgba[colorName]};`)
        .join('\n')
        .replace(/^/, ':root {\n')
        .concat('\n}');
}

function getLessContent() {
    return Object.keys(colors.rgba)
        .map((colorName) => `@color${colorName}: ${colors.rgba[colorName]};`)
        .join('\n');
}

function getAndroidColorsContent() {
    return Object.keys(colors.argbHex)
        .map((colorName) => `\t<item name="${colorName}" type="color">${colors.argbHex[colorName]}</item>`)
        .join('\n')
        .replace(/^/, `<?xml version="1.0" encoding="utf-8"?>\n<resources>\n`)
        .concat(`\n</resources>`);
}
