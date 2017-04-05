const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const helpers = require('./helpers');
const commonConfig = require('./webpack.common.js');

const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');

/**
 * Webpack Plugins
 */
const DefinePlugin = require('webpack/lib/DefinePlugin');
const NamedModulesPlugin = require('webpack/lib/NamedModulesPlugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const ProgressPlugin = require('webpack/lib/ProgressPlugin');
const DashboardPlugin = require('webpack-dashboard/plugin');

/**
 * Webpack Constants
 */
const ENV = process.env.ENV = process.env.NODE_ENV = 'development';
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;
const HMR = helpers.hasProcessFlag('hot');
const METADATA = {
    host: HOST,
    port: PORT,
    ENV: ENV,
    HMR: HMR
};

let polyfillsManifest;
let vendorManifest;

try {
    polyfillsManifest = require(helpers.root('dist-dll', 'polyfills-manifest.json'));
    vendorManifest = require(helpers.root('dist-dll', 'vendor-manifest.json'));
} catch (e) {
    throw 'Please rebuild DLL first by running `npm run build:dll`';
}

/**
 * Webpack configuration
 *
 * See: http://webpack.github.io/docs/configuration.html#cli
 */
module.exports = webpackMerge(commonConfig, {

    /**
     * Developer tool to enhance debugging
     *
     * See: http://webpack.github.io/docs/configuration.html#devtool
     * See: https://github.com/webpack/docs/wiki/build-performance#sourcemaps
     */
    devtool: 'source-map',

    /**
     * Options affecting the output of the compilation.
     *
     * See: http://webpack.github.io/docs/configuration.html#output
     */
    output: {

        /**
         * Specifies the name of each output file on disk.
         * IMPORTANT: You must not specify an absolute path here!
         *
         * See: http://webpack.github.io/docs/configuration.html#output-filename
         */
        filename: '[name].bundle.js',

        /** The filename of non-entry chunks as relative path
         * inside the output.path directory.
         *
         * See: http://webpack.github.io/docs/configuration.html#output-chunkfilename
         */
         chunkFilename: '[name].chunk.js'
    },

    module: {

      rules: [
        /*
         * sass loader support for *.scss files (styles directory only)
         * Loads external sass styles into the DOM, supports HMR
         *
         */
        {
          test: /\.scss$/,
          use: ['raw-loader', 'postcss-loader', 'sass-loader'],
          exclude: [helpers.root('src', 'styles')]
        }
      ]
    },

    plugins: [

        new ProgressPlugin(),
        new DashboardPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true
        }),

        new webpack.DllReferencePlugin({
            context: '.',
            manifest: polyfillsManifest
        }),

        new webpack.DllReferencePlugin({
            context: '.',
            manifest: vendorManifest
        }),

        new AddAssetHtmlPlugin([
            { filepath: 'dist-dll' + '/polyfills.dll.js', includeSourcemap: false },
            { filepath: 'dist-dll' + '/vendor.dll.js', includeSourcemap: false }
        ]),

        /**
         * Plugin: DefinePlugin
         * Description: Define free variables.
         * Useful for having development builds with debug logging or adding global constants.
         *
         * Environment helpers
         *
         * See: https://webpack.github.io/docs/list-of-plugins.html#defineplugin
         */
        // NOTE: when adding more properties, make sure you include them in custom-typings.d.ts
        new DefinePlugin({
            'ENV': JSON.stringify(METADATA.ENV),
            'HMR': METADATA.HMR,
            'process.env': {
                'ENV': JSON.stringify(METADATA.ENV),
                'NODE_ENV': JSON.stringify(METADATA.ENV),
                'HMR': METADATA.HMR,
            }
        }),

        /**
         * Plugin: NamedModulesPlugin (experimental)
         * Description: Uses file names as module name.
         *
         * See: https://github.com/webpack/webpack/commit/a04ffb928365b19feb75087c63f13cadfc08e1eb
         */
        new NamedModulesPlugin(),

        new LoaderOptionsPlugin({
            debug: true,
            options: {
                metadata: METADATA,
                /**
                 * Static analysis linter for TypeScript advanced options configuration
                 * Description: An extensible linter for the TypeScript language.
                 *
                 * See: https://github.com/wbuchwalter/tslint-loader
                 */
                tslint: {
                    emitErrors: false,
                    failOnHint: false,
                    resourcePath: helpers.root('src')
                }
            }
        })
    ],

    /**
     * Webpack Development Server configuration
     * Description: The webpack-dev-server is a little node.js Express server.
     * The server emits information about the compilation state to the client,
     * which reacts to those events.
     *
     * See: https://webpack.github.io/docs/webpack-dev-server.html
     */
    devServer: {
        contentBase: './src',
        port: METADATA.port,
        host: METADATA.host,
        historyApiFallback: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        },
        stats: 'minimal'
    }

});
