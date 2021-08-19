const buildTokens = require('@ptsecurity/mosaic/design-tokens/style-dictionary/build');


const mosaicTokensProps = 'node_modules/@ptsecurity/mosaic/design-tokens/tokens/properties/**/*.json5';
const mosaicTokensComponents = 'node_modules/@ptsecurity/mosaic/design-tokens/tokens/components/**/*.json5';

buildTokens([
    {
        name: 'default-theme',
        buildPath: [
            mosaicTokensProps,
            mosaicTokensComponents
        ],
        outputPath: 'apps/mc-web/src/styles/default-theme/'
    }
]);

