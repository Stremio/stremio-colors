const fs = require('fs');
const convert = require('color-convert');
const { colord } = require('colord');

const colors = JSON.parse(fs.readFileSync('colors.json'));

const LIGHTNESS_SHADES_COUNT = 5;
const LIGHTNESS_STEP = 5;
const ALPHA_SHADES_COUNT = 9;
const ALPHA_STEP = 0.1;

const shades = Object.keys(colors)
    .map((name) => ({ name, color: colors[name] }))
    .map(({ name, color: [h, s, l] }) => ([
        ...Array(LIGHTNESS_SHADES_COUNT)
            .fill(null)
            .map((_, index) => {
                const lightness = Math.min(100, Math.max(0, Number((l + (index + 1) * LIGHTNESS_STEP).toFixed(10))));
                return {
                    name: `${name}-light${index + 1}`,
                    color: [h, s, lightness]
                };
            })
            .reverse(),
        {
            name,
            color: [h, s, l]
        },
        ...Array(LIGHTNESS_SHADES_COUNT)
            .fill(null)
            .map((_, index) => {
                const lightness = Math.min(100, Math.max(0, Number((l + (index + 1) * LIGHTNESS_STEP * -1).toFixed(10))));
                return {
                    name: `${name}-dark${index + 1}`,
                    color: [h, s, lightness]
                };
            })
    ]))
    .reduce((colors, shades) => colors.concat(shades), []);

const shadesWithAlpha = shades
    .map(({ name, color: [h, s, l] }) => ([
        ...Array(ALPHA_SHADES_COUNT)
            .fill(null)
            .map((_, index) => {
                const alpha = Math.min(1, Math.max(0, Number(((index + 1) * ALPHA_STEP).toFixed(10))));
                return {
                    name: `${name}-${alpha * 100}`,
                    color: [h, s, l, alpha]
                };
            }),
        {
            name,
            color: [h, s, l, 1]
        }
    ]))
    .reduce((colors, shades) => colors.concat(shades), []);

const argbHex = Object.fromEntries(shadesWithAlpha.map(({ name, color: [h, s, l, a] }) => {
    const hex = convert.hsl.hex([h, s, l]);
    const alpha = Math.floor(a * 255).toString(16).toUpperCase();
    return [name.replace(/-/g, '_'), `#${alpha}${hex}`]
}));

const rgba = Object.fromEntries(shadesWithAlpha.map(({ name, color: [h, s, l, a] }) => {
    const rgba = colord({ h, s, l, a }).toRgbString();
    return [name.replace(/-/g, '_'), rgba];
}));

const css = shadesWithAlpha
    .map(({ name, color: [h, s, l, a] }) => `\t--color-${name}: hsla(${h}, ${s}%, ${l}%, ${a});`)
    .join('\n')
    .replace(/^/, ':root {\n')
    .concat('\n}');

const less = shadesWithAlpha
    .map(({ name, color: [h, s, l, a] }) => `@color-${name}: hsla(${h}, ${s}%, ${l}%, ${a});`)
    .join('\n');

const android = Object.entries(argbHex)
    .map(([name, color]) => `\t<item type="color" name="${name}">${color}</item>`)
    .join('\n')
    .replace(/^/, '<?xml version="1.0" encoding="utf-8"?>\n<resources>\n')
    .concat('\n</resources>');

const readme = shades
    .map(({ name, color: [h, s, l] }) => {
        const hex = convert.hsl.hex([h, s, l]);
        return `|$$\\Huge\\textcolor{#${hex}}{\\text{▇}}$$|${name}|hsl(${h}, ${s}%, ${l}%)|#${hex}|`;
    })
    .join('\n')
    .replace(/^/, '|PREVIEW|NAME|HSL|HEX|\n|:---:|:---:|:---:|:---:|\n');

const colorsExport = {
    'transparent': 'rgba(0, 0, 0, 0)',
    'white': 'rgba(255, 255, 255, 1)',
    'black': 'rgba(0, 0, 0, 1)',
    ...rgba,
    argbHex: {
        ...argbHex,
        'transparent': '#00000000',
        'white': '#FFFFFFFF',
        'black': '#FF000000',
    }
};

fs.writeFileSync('colors.js', `module.exports = ${JSON.stringify(colorsExport)};`);

fs.mkdirSync('css', { recursive: true });
fs.writeFileSync('css/stremio-colors.css', css);

fs.mkdirSync('less', { recursive: true });
fs.writeFileSync('less/stremio-colors.less', less);

fs.mkdirSync('android/src/main/res/values', { recursive: true });
fs.writeFileSync('android/src/main/res/values/colors.xml', android);

fs.writeFileSync('README.md', `# stremio-colors\n\n${readme}`);
