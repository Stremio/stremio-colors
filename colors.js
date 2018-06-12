const stremioColors = require('./colors.json');

const colors = {
    argbHex: {},
    rgbaHex: {},
    rgba: {}
};
Object.keys(stremioColors).forEach((colorName) => {
    const sanitizedColorName = colorName.replace(/-/g, '');
    const rgbHex = stremioColors[colorName]
        .split(',')
        .reduce((result, value, index) => result + ('0' + Math.round(value).toString(16)).slice(-2), '');

    colors[`${sanitizedColorName}`] = `rgba(${stremioColors[colorName]},1)`;
    colors[`${sanitizedColorName}20`] = `rgba(${stremioColors[colorName]},0.2)`;
    colors[`${sanitizedColorName}40`] = `rgba(${stremioColors[colorName]},0.4)`;
    colors[`${sanitizedColorName}60`] = `rgba(${stremioColors[colorName]},0.6)`;
    colors[`${sanitizedColorName}80`] = `rgba(${stremioColors[colorName]},0.8)`;

    colors.rgba[`${sanitizedColorName}`] = colors[`${sanitizedColorName}`];
    colors.rgba[`${sanitizedColorName}20`] = colors[`${sanitizedColorName}20`];
    colors.rgba[`${sanitizedColorName}40`] = colors[`${sanitizedColorName}40`];
    colors.rgba[`${sanitizedColorName}60`] = colors[`${sanitizedColorName}60`];
    colors.rgba[`${sanitizedColorName}80`] = colors[`${sanitizedColorName}80`];

    colors.argbHex[`${sanitizedColorName}`] = `#ff${rgbHex}`;
    colors.argbHex[`${sanitizedColorName}20`] = `#33${rgbHex}`;
    colors.argbHex[`${sanitizedColorName}40`] = `#66${rgbHex}`;
    colors.argbHex[`${sanitizedColorName}60`] = `#99${rgbHex}`;
    colors.argbHex[`${sanitizedColorName}80`] = `#cc${rgbHex}`;

    colors.rgbaHex[`${sanitizedColorName}`] = `#${rgbHex}ff`;
    colors.rgbaHex[`${sanitizedColorName}20`] = `#${rgbHex}33`;
    colors.rgbaHex[`${sanitizedColorName}40`] = `#${rgbHex}66`;
    colors.rgbaHex[`${sanitizedColorName}60`] = `#${rgbHex}99`;
    colors.rgbaHex[`${sanitizedColorName}80`] = `#${rgbHex}cc`;
});

colors.transparent = `rgba(0,0,0,0)`;
colors.rgba.transparent = `rgba(0,0,0,0)`;
colors.argbHex.transparent = `#00000000`;
colors.rgbaHex.transparent = `#00000000`;

module.exports = colors;
