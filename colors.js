const stremioColors = require('./colors.json');

const colors = {
    argbHex: {}
};
Object.keys(stremioColors).forEach((colorName) => {
    const sanitizedColorName = colorName.replace(/color-/g, '');
    const rgbHex = stremioColors[colorName]
        .split(',')
        .reduce((result, value, index) => result + Math.round(value).toString(16), '');

    colors[`${sanitizedColorName}`] = `rgba(${stremioColors[colorName]},1)`;
    colors[`${sanitizedColorName}20`] = `rgba(${stremioColors[colorName]},0.2)`;
    colors[`${sanitizedColorName}40`] = `rgba(${stremioColors[colorName]},0.4)`;
    colors[`${sanitizedColorName}80`] = `rgba(${stremioColors[colorName]},0.8)`;

    colors.argbHex[`${sanitizedColorName}`] = `#ff${rgbHex}`;
    colors.argbHex[`${sanitizedColorName}20`] = `#33${rgbHex}`;
    colors.argbHex[`${sanitizedColorName}40`] = `#66${rgbHex}`;
    colors.argbHex[`${sanitizedColorName}80`] = `#cc${rgbHex}`;
});

module.exports = colors;
