const fs = require('fs');
const path = require('path');
const colors = require('../colors.js');

const README_PATH = path.join(__dirname, '../README.md');

fs.writeFileSync(README_PATH, getReadmeContent());

function getReadmeContent() {
    return Object.keys(colors.argbHex)
        .filter((colorName) => !colorName.includes('0'))
        .map((colorName) => {
            const hex = colors.argbHex[colorName].substring(3);
            const rgb = colors.rgba[colorName].substring(5).slice(0, -3);
            return `|![${colorName}](https://placehold.it/80/${hex}/000000?text=+)|${colorName}|${hex}|${rgb}|`;
        })
        .join('\n')
        .replace(/^/, '|preview|name|hex|rgb|\n|:---:|:---:|:---:|:---:|\n');
}
