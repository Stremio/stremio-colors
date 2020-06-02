const colors = require('../colors.json');

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

module.exports = {
    shades,
    shadesWithAlpha
};
