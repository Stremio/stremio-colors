const fs = require('fs');
const convert = require('color-convert');
const { shadesWithAlpha } = require('./shades');

const css = shadesWithAlpha
    .map(({ name, color: [h, s, l, a] }) => `\t--color-${name}: hsla(${h}, ${s}%, ${l}%, ${a});`)
    .join('\n')
    .replace(/^/, ':root {\n')
    .concat('\n}');

const less = shadesWithAlpha
    .map(({ name, color: [h, s, l, a] }) => `@color-${name}: hsla(${h}, ${s}%, ${l}%, ${a});`)
    .join('\n');

const android = shadesWithAlpha
    .map(({ name, color: [h, s, l, a] }) => {
        const hex = convert.hsl.hex([h, s, l]);
        const alpha = Math.floor(a * 255).toString(16).toUpperCase();
        return `\t<item type="color" name="${name.replace(/-/g, '_')}">#${alpha}${hex}</item>`
    })
    .join('\n')
    .replace(/^/, '<?xml version="1.0" encoding="utf-8"?>\n<resources>\n')
    .concat('\n</resources>');

fs.mkdirSync('../css', { recursive: true });
fs.writeFileSync('../css/stremio-colors.css', css);

fs.mkdirSync('../less', { recursive: true });
fs.writeFileSync('../less/stremio-colors.less', less);

fs.mkdirSync('../android/src/main/res/values', { recursive: true });
fs.writeFileSync('../android/src/main/res/values/colors.xml', android);
fs.writeFileSync('../android/build.gradle', `apply plugin: 'com.android.library'
android {
    compileSdkVersion ((rootProject?.ext?.properties?.compileSdkVersion) ?: 28)
    buildToolsVersion ((rootProject?.ext?.properties?.buildToolsVersion) ?: "28.0.3")

    defaultConfig {
        minSdkVersion ((rootProject?.ext?.properties?.minSdkVersion) ?: 21)
        targetSdkVersion ((rootProject?.ext?.properties?.targetSdkVersion) ?: 28)
        versionCode 1
        versionName "1.0.0"
    }
}
`);
fs.writeFileSync('../android/src/main/AndroidManifest.xml', `<manifest package="com.stremio.colors">
</manifest>
`);
