const fs = require('fs');
const colors = require('./colors.js');

fs.writeFileSync('./README.md', getReadmeContent());

function getReadmeContent() {
    return `|preview|name|hex|rgb|
|:---:|:---:|:---:|:---:|
${Object.keys(colors.argbHex)
            .filter((colorName) => !colorName.includes('0'))
            .map((colorName) => {
                const hex = colors.argbHex[colorName].substring(3);
                const rgb = colors.rgba[colorName].substring(5).slice(0, -3);
                return `|![${colorName}](https://placehold.it/80/${hex}/000000?text=+)|${colorName}|${hex}|${rgb}|`;
            })
            .join('\n')}`;
}
