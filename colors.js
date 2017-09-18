var colors = require('./colors.json');

function rgba(colorName) {
    return 'rgba(' + colors[colorName] + ')';
}

function raw(colorName) {
    var colorParams = colors[colorName].split(',').map(parseFloat);
    
    return {
        red: colorParams[0],
        green: colorParams[1],
        blue: colorParams[2],
        alpha: colorParams[3]
    };
}

module.exports = {
    rgba: rgba,
    raw: raw
};
