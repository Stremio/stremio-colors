var stremioColors = require('./colors.json');

var colors = {
    argbHex: {},
    rgbaHex: {},
    rgba: {}
};

Object.keys(stremioColors).forEach(function(colorName) {
    var rgb = stremioColors[colorName];
    var rgbHex = rgb.split(',').reduce(function(result, value) {
        return result + ('0' + parseInt(value).toString(16)).slice(-2);
    }, '');

    colors.rgba[colorName] = 'rgba(' + rgb + ',1)';
    colors.rgba[colorName + '80'] = 'rgba(' + rgb + ',0.8)';
    colors.rgba[colorName + '60'] = 'rgba(' + rgb + ',0.6)';
    colors.rgba[colorName + '40'] = 'rgba(' + rgb + ',0.4)';
    colors.rgba[colorName + '20'] = 'rgba(' + rgb + ',0.2)';

    colors.argbHex[colorName] = '#ff' + rgbHex;
    colors.argbHex[colorName + '80'] = '#cc' + rgbHex;
    colors.argbHex[colorName + '60'] = '#99' + rgbHex;
    colors.argbHex[colorName + '40'] = '#66' + rgbHex;
    colors.argbHex[colorName + '20'] = '#33' + rgbHex;

    colors.rgbaHex[colorName] = '#' + rgbHex + 'ff';
    colors.rgbaHex[colorName + '80'] = '#' + rgbHex + 'cc';
    colors.rgbaHex[colorName + '60'] = '#' + rgbHex + '99';
    colors.rgbaHex[colorName + '40'] = '#' + rgbHex + '66';
    colors.rgbaHex[colorName + '20'] = '#' + rgbHex + '33';

    colors[colorName] = colors.rgba[colorName];
    colors[colorName + '80'] = colors.rgba[colorName + '80'];
    colors[colorName + '60'] = colors.rgba[colorName + '60'];
    colors[colorName + '40'] = colors.rgba[colorName + '40'];
    colors[colorName + '20'] = colors.rgba[colorName + '20'];
});

module.exports = colors;
