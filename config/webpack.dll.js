const webpack = require('webpack');

const helpers = require('./helpers');

const DefinePlugin = require('webpack/lib/DefinePlugin');

const DLL_DIST = helpers.root('dist-dll');
const ENV = process.env.ENV = process.env.NODE_ENV;

const METADATA = {
    ENV: ENV
};

module.exports = {
    entry: {
        'polyfills': [ './src/polyfills.browser.ts' ],
        'vendor': [ './src/vendor.browser.ts' ]
    },

    resolve: {
        extensions: [ '.js', '.ts' ],
        modules: [ 'node_modules', helpers.root('src') ]
    },

    output: {
        filename: '[name].dll.js',
        path: DLL_DIST,

        // The name of the global variable which the library's
        // require() function will be assigned to
        library: '[name]',
    },

    plugins: [

        // https://github.com/angular/angular/issues/11580
        new webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            ///angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            /angular(\\|\/)core(\\|\/)@angular/,
            helpers.root('./src')
        ),

        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false
            }
        }),

        new webpack.DllPlugin({
            // The path to the manifest file which maps between
            // modules included in a bundle and the internal IDs
            // within that bundle
            path: DLL_DIST + '/[name]-manifest.json',
            // The name of the global variable which the library's
            // require function has been assigned to. This must match the
            // output.library option above
            name: '[name]'
        }),

        new DefinePlugin({
            'ENV': JSON.stringify(METADATA.ENV)
        }),
    ],
};
