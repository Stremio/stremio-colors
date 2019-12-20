const fs = require('fs');
const convert = require('color-convert');
const colors = require('./colors.json');

const LIGHTNESS_SHADES_COUNT = 5;
const LIGHTNESS_STEP = 5;
const ALPHA_SHADES_COUNT = 4;
const ALPHA_STEP = 0.2;

const shades = Object.keys(colors)
    .map((name) => ({ name, color: colors[name] }))
    .map(({ name, color: [h, s, l] }) => ([
        ...Array(LIGHTNESS_SHADES_COUNT)
            .fill(null)
            .map((_, index) => ({
                name: `${name}light${index + 1}`,
                color: [h, s, Number((l + (index + 1) * LIGHTNESS_STEP).toFixed(10))]
            }))
            .reverse(),
        {
            name,
            color: [h, s, l]
        },
        ...Array(LIGHTNESS_SHADES_COUNT)
            .fill(null)
            .map((_, index) => ({
                name: `${name}dark${index + 1}`,
                color: [h, s, Number((l + (index + 1) * LIGHTNESS_STEP * -1).toFixed(10))]
            }))
    ]))
    .reduce((colors, shades) => colors.concat(shades), []);

const shades_with_alpha = shades
    .map(({ name, color: [h, s, l] }) => ([
        ...Array(ALPHA_SHADES_COUNT)
            .fill(null)
            .map((_, index) => ({
                name,
                color: [h, s, l, Number(((index + 1) * ALPHA_STEP).toFixed(10))]
            })),
        {
            name,
            color: [h, s, l, 1]
        }
    ]))
    .reduce((colors, shades) => colors.concat(shades), []);

const css = shades_with_alpha
    .map(({ name, color: [h, s, l, a] }) => `\t--color-${name}${a !== 1 ? `-${a * 100}` : ''}: hsla(${h}, ${s}%, ${l}%, ${a});`)
    .join('\n')
    .replace(/^/, ':root {\n')
    .concat('\n}');

const android = shades_with_alpha
    .map(({ name, color: [h, s, l, a] }) => {
        const hex = convert.hsl.hex([h, s, l]);
        const alpha = Math.floor(a * 255).toString(16).toUpperCase();
        return `\t<item type="color" name="${name}${a !== 1 ? `_${a * 100}` : ''}">#${alpha}${hex}</item>`
    })
    .join('\n')
    .replace(/^/, '<?xml version="1.0" encoding="utf-8"?>\n<resources>\n')
    .concat('\n</resources>');

const readme = shades
    .map(({ name, color: [h, s, l] }) => {
        const hex = convert.hsl.hex([h, s, l]);
        return `|![ ](https://placehold.it/60/${hex}?text=+)|${name}|hsl(${h}, ${s}%, ${l}%)|#${hex}|`;
    })
    .join('\n')
    .replace(/^/, '|PREVIEW|NAME|HSL|HEX|\n|:---:|:---:|:---:|:---:|\n');

fs.writeFileSync('./dist/css/stremio-colors.css', css);
fs.writeFileSync('./dist/android/src/main/res/values/colors.xml', android);
fs.writeFileSync('./README.MD', readme);
