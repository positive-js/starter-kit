const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const helpers = require('./helpers');
const commonConfig = require('./webpack.common.js');

/**
 * Webpack Plugins
 */
const DefinePlugin = require('webpack/lib/DefinePlugin');
const NormalModuleReplacementPlugin = require('webpack/lib/NormalModuleReplacementPlugin');
const IgnorePlugin = require('webpack/lib/IgnorePlugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const WebpackMd5Hash = require('webpack-md5-hash');

const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

/**
 * Webpack Constants
 */
const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

const METADATA = webpackMerge(commonConfig.metadata, {
    ENV: ENV,
    HMR: false
});

let polyfillsManifest;
let vendorManifest;

try {
    polyfillsManifest = require(helpers.root('dist-dll', 'polyfills-manifest.json'));
    vendorManifest = require(helpers.root('dist-dll', 'vendor-manifest.json'));
} catch (e) {
    throw 'Please rebuild DLL first by running `npm run build:dll`';
}

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

        /**
         * The filename of the SourceMaps for the JavaScript files.
         * They are inside the output.path directory.
         *
         * See: http://webpack.github.io/docs/configuration.html#output-sourcemapfilename
         */
        sourceMapFilename: '[name].[chunkhash].bundle.map',

        /**
         * The filename of non-entry chunks as relative path
         * inside the output.path directory.
         *
         * See: http://webpack.github.io/docs/configuration.html#output-chunkfilename
         */
        chunkFilename: '[name].chunk.js'
    },

    module: {

      rules: [
        {
            test: /\.scss$/,
            use: [
                'raw-loader', 'postcss-loader', 'sass-loader'
            ],
            include: [helpers.root('src', 'app')]
        },
        /*
         * Extract and compile SCSS files from .src/styles directory to external CSS file
         */
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: 'raw!postcss!sass'
          }),
          exclude: [helpers.root('src', 'app')]
        },

      ]

    },

    /**
     * Add additional plugins to the compiler.
     *
     * See: http://webpack.github.io/docs/configuration.html#plugins
     */
    plugins: [

        new ExtractTextPlugin('[name].[contenthash].css'),

        new webpack.NoEmitOnErrorsPlugin(),

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
         * Plugin: WebpackMd5Hash
         * Description: Plugin to replace a standard webpack chunkhash with md5.
         *
         * See: https://www.npmjs.com/package/webpack-md5-hash
         */
        new WebpackMd5Hash(),

        /**
         * Plugin: DefinePlugin
         * Description: Define free variables.
         * Useful for having development builds with debug logging or adding global constants.
         *
         * Environment helpers
         *
         * See: https://webpack.github.io/docs/list-of-plugins.html#defineplugin
         */
        // NOTE: when adding more properties make sure you include them in custom-typings.d.ts
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
         * Plugin: UglifyJsPlugin
         * Description: Minimize all JavaScript output of chunks.
         * Loaders are switched into minimizing mode.
         *
         * See: https://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
         */
        // NOTE: To debug prod builds uncomment //debug lines and comment //prod lines
        new UglifyJsPlugin({
            sourceMap: false
        }),

        new LoaderOptionsPlugin({
            minimize: true,
            debug: false,
            options: {
            }
        })
        /**
         * Plugin: CompressionPlugin
         * Description: Prepares compressed versions of assets to serve
         * them with Content-Encoding
         *
         * See: https://github.com/webpack/compression-webpack-plugin
         */
        //  install compression-webpack-plugin
        // new CompressionPlugin({
        //     asset: "[path].gz[query]",
        //     algorithm: "gzip",
        //     test: /\.js$/,
        //     threshold: 10240,
        //     minRatio: 0.8
        // })
    ]
});
