var stremioColors = require('./colors.json');

var colors = {
    argbHex: {},
    rgbaHex: {},
    rgba: {}
};
Object.keys(stremioColors).forEach(function(colorName) {
    var rgbHex = stremioColors[colorName].split(',').reduce(function(result, value) {
        return result + ('0' + parseInt(value).toString(16)).slice(-2);
    }, '');

    colors[`${colorName}`] = `rgba(${stremioColors[colorName]},1)`;
    colors[`${colorName}20`] = `rgba(${stremioColors[colorName]},0.2)`;
    colors[`${colorName}40`] = `rgba(${stremioColors[colorName]},0.4)`;
    colors[`${colorName}60`] = `rgba(${stremioColors[colorName]},0.6)`;
    colors[`${colorName}80`] = `rgba(${stremioColors[colorName]},0.8)`;

    colors.rgba[`${colorName}`] = colors[`${colorName}`];
    colors.rgba[`${colorName}20`] = colors[`${colorName}20`];
    colors.rgba[`${colorName}40`] = colors[`${colorName}40`];
    colors.rgba[`${colorName}60`] = colors[`${colorName}60`];
    colors.rgba[`${colorName}80`] = colors[`${colorName}80`];

    colors.argbHex[`${colorName}`] = `#ff${rgbHex}`;
    colors.argbHex[`${colorName}20`] = `#33${rgbHex}`;
    colors.argbHex[`${colorName}40`] = `#66${rgbHex}`;
    colors.argbHex[`${colorName}60`] = `#99${rgbHex}`;
    colors.argbHex[`${colorName}80`] = `#cc${rgbHex}`;

    colors.rgbaHex[`${colorName}`] = `#${rgbHex}ff`;
    colors.rgbaHex[`${colorName}20`] = `#${rgbHex}33`;
    colors.rgbaHex[`${colorName}40`] = `#${rgbHex}66`;
    colors.rgbaHex[`${colorName}60`] = `#${rgbHex}99`;
    colors.rgbaHex[`${colorName}80`] = `#${rgbHex}cc`;
});

module.exports = colors;
