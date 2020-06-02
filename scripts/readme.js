const fs = require('fs');
const convert = require('color-convert');
const { shades } = require('./shades');

const readme = shades
    .map(({ name, color: [h, s, l] }) => {
        const hex = convert.hsl.hex([h, s, l]);
        return `|![ ](https://placehold.it/60/${hex}?text=+)|${name}|hsl(${h}, ${s}%, ${l}%)|#${hex}|`;
    })
    .join('\n')
    .replace(/^/, '|PREVIEW|NAME|HSL|HEX|\n|:---:|:---:|:---:|:---:|\n');

fs.writeFileSync('../README.md', readme);
