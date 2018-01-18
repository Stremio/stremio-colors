const fs = require('fs');
const colors = require('./colors.js');

const PREVIEW_FILE_PATH = './preview.html';
const README_FILE_PATH = './readme.md';

fs.writeFileSync(PREVIEW_FILE_PATH, getPreviewContent());
fs.writeFileSync(README_FILE_PATH, getPreviewContent());

function getPreviewContent() {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <title>Stremio Colors</title>
        <style>
            .color-element {
                display: flex;
                width: 400px;
                height: 50px;
            }
            .color-element > div {
                display: flex;
                flex: 1;
                align-items: center;
                justify-content: center;
            }
        </style>
    </head>
    <body>
        <div id="content"></div>
        <script>
            var colors = ${JSON.stringify(colors.rgba)};
    
            Object.keys(colors)
                .forEach(function(colorName) {
                    var colorValue = colors[colorName];
    
                    var colorElement = document.createElement('div');
                    colorElement.className = "color-element";
    
                    var colorNameElement = document.createElement('div');
                    colorNameElement.innerText = colorName;
    
                    var colorRect = document.createElement('div');
                    colorRect.style = "background: " + colorValue;
    
                    colorElement.appendChild(colorNameElement);
                    colorElement.appendChild(colorRect);
                    content.appendChild(colorElement);
                });
        </script>
    </body>
    </html>
    `;
}
