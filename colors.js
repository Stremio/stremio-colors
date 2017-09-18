var colors = require('./colors.json');

module.exports = function(colorName) {
    var colorParams = colors[colorName].split(',').map(parseFloat);

    return {
        red: colorParams[0],
        green: colorParams[1],
        blue: colorParams[2],
        alpha: colorParams[3]
    };
};
