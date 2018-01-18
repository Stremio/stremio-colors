
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
            var colors = {"white":"rgba(255,255,255,1)","white20":"rgba(255,255,255,0.2)","white40":"rgba(255,255,255,0.4)","white60":"rgba(255,255,255,0.6)","white80":"rgba(255,255,255,0.8)","prim":"rgba(99,63,126,1)","prim20":"rgba(99,63,126,0.2)","prim40":"rgba(99,63,126,0.4)","prim60":"rgba(99,63,126,0.6)","prim80":"rgba(99,63,126,0.8)","primdark":"rgba(75,45,98,1)","primdark20":"rgba(75,45,98,0.2)","primdark40":"rgba(75,45,98,0.4)","primdark60":"rgba(75,45,98,0.6)","primdark80":"rgba(75,45,98,0.8)","primlight":"rgba(177,116,215,1)","primlight20":"rgba(177,116,215,0.2)","primlight40":"rgba(177,116,215,0.4)","primlight60":"rgba(177,116,215,0.6)","primlight80":"rgba(177,116,215,0.8)","medium":"rgba(138,90,171,1)","medium20":"rgba(138,90,171,0.2)","medium40":"rgba(138,90,171,0.4)","medium60":"rgba(138,90,171,0.6)","medium80":"rgba(138,90,171,0.8)","secondary":"rgba(58,73,125,1)","secondary20":"rgba(58,73,125,0.2)","secondary40":"rgba(58,73,125,0.4)","secondary60":"rgba(58,73,125,0.6)","secondary80":"rgba(58,73,125,0.8)","secondarylight":"rgba(76,94,155,1)","secondarylight20":"rgba(76,94,155,0.2)","secondarylight40":"rgba(76,94,155,0.4)","secondarylight60":"rgba(76,94,155,0.6)","secondarylight80":"rgba(76,94,155,0.8)","fb":"rgba(44,62,121,1)","fb20":"rgba(44,62,121,0.2)","fb40":"rgba(44,62,121,0.4)","fb60":"rgba(44,62,121,0.6)","fb80":"rgba(44,62,121,0.8)","bgmain":"rgba(32,31,50,1)","bgmain20":"rgba(32,31,50,0.2)","bgmain40":"rgba(32,31,50,0.4)","bgmain60":"rgba(32,31,50,0.6)","bgmain80":"rgba(32,31,50,0.8)","glass":"rgba(43,44,67,1)","glass20":"rgba(43,44,67,0.2)","glass40":"rgba(43,44,67,0.4)","glass60":"rgba(43,44,67,0.6)","glass80":"rgba(43,44,67,0.8)","darkest":"rgba(24,23,38,1)","darkest20":"rgba(24,23,38,0.2)","darkest40":"rgba(24,23,38,0.4)","darkest60":"rgba(24,23,38,0.6)","darkest80":"rgba(24,23,38,0.8)","black":"rgba(0,0,0,1)","black20":"rgba(0,0,0,0.2)","black40":"rgba(0,0,0,0.4)","black60":"rgba(0,0,0,0.6)","black80":"rgba(0,0,0,0.8)","highlight":"rgba(193,178,203,1)","highlight20":"rgba(193,178,203,0.2)","highlight40":"rgba(193,178,203,0.4)","highlight60":"rgba(193,178,203,0.6)","highlight80":"rgba(193,178,203,0.8)","accent":"rgba(140,163,220,1)","accent20":"rgba(140,163,220,0.2)","accent40":"rgba(140,163,220,0.4)","accent60":"rgba(140,163,220,0.6)","accent80":"rgba(140,163,220,0.8)","neutral":"rgba(122,121,133,1)","neutral20":"rgba(122,121,133,0.2)","neutral40":"rgba(122,121,133,0.4)","neutral60":"rgba(122,121,133,0.6)","neutral80":"rgba(122,121,133,0.8)","neutrallight":"rgba(168,168,168,1)","neutrallight20":"rgba(168,168,168,0.2)","neutrallight40":"rgba(168,168,168,0.4)","neutrallight60":"rgba(168,168,168,0.6)","neutrallight80":"rgba(168,168,168,0.8)","signal1":"rgba(251,185,25,1)","signal120":"rgba(251,185,25,0.2)","signal140":"rgba(251,185,25,0.4)","signal160":"rgba(251,185,25,0.6)","signal180":"rgba(251,185,25,0.8)","signal2":"rgba(251,94,25,1)","signal220":"rgba(251,94,25,0.2)","signal240":"rgba(251,94,25,0.4)","signal260":"rgba(251,94,25,0.6)","signal280":"rgba(251,94,25,0.8)","signal3":"rgba(199,150,44,1)","signal320":"rgba(199,150,44,0.2)","signal340":"rgba(199,150,44,0.4)","signal360":"rgba(199,150,44,0.6)","signal380":"rgba(199,150,44,0.8)","signal4":"rgba(25,251,184,1)","signal420":"rgba(25,251,184,0.2)","signal440":"rgba(25,251,184,0.4)","signal460":"rgba(25,251,184,0.6)","signal480":"rgba(25,251,184,0.8)"};
    
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
    