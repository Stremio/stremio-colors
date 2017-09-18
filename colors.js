var colors = require('./colors.json');

function rgba(colorName) {
    return 'rgba(' + colors[colorName] + ')';
}

function hexa(colorName) {
    var colorParams = colors[colorName].split(',').map(parseFloat);
    var red = colorParams[0].toString(16);
    var green = colorParams[1].toString(16);
    var blue = colorParams[2].toString(16);
    var alpha = Math.floor(colorParams[3] * 255).toString(16);

    return red + green + blue + alpha;
}

module.exports = {
    rgba: rgba,
    hexa: hexa
};
