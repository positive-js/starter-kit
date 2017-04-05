const webpack = require('webpack');
const helpers = require('./helpers');

/*
 * Webpack Plugins
 */
const HtmlElementsPlugin = require('./html-elements-plugin');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

const ProvidePlugin = require('webpack/lib/ProvidePlugin');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

const METADATA = {
    title: 'Angular2 seed',
    baseUrl: '/'
};

const appConfig = {
    root: 'src',
    main: 'main.browser.ts',
    environments: '',
    outDir: 'dist'
};

const HMR = helpers.hasProcessFlag('hot');
const AOT = helpers.hasNpmFlag('aot');

const appMain = helpers.root(appConfig.root, appConfig.main);
const nodeModules = helpers.root('node_modules');

let entryPoints = {
    main: appMain
};

let extraRules = [];
let extraPlugins = [];

/*
 * Webpack configuration
 *
 * See: http://webpack.github.io/docs/configuration.html#cli
 */
module.exports = {

    context: helpers.root(),
    /*
     * The entry point for the bundle
     * Our Angular.js app
     *
     * See: http://webpack.github.io/docs/configuration.html#entry
     */
    entry: entryPoints,

    output: {
        path: helpers.root(appConfig.outDir)
    },

    /*
     * Options affecting the resolving of modules.
     *
     * See: http://webpack.github.io/docs/configuration.html#resolve
     */
    resolve: {

        /*
         * An array of extensions that should be used to resolve modules.
         *
         * See: http://webpack.github.io/docs/configuration.html#resolve-extensions
         */
        extensions: ['.ts', '.js', 'json'],

        // An array of directory names to be resolved to the current directory
        modules: [nodeModules, helpers.root('src')]
    },

    /*
     * Options affecting the normal modules.
     *
     * See: http://webpack.github.io/docs/configuration.html#module
     */
    module: {

        rules: [
            {enforce: 'pre', test: /\.js$/, use: 'source-map-loader', exclude: [ nodeModules ]},

            /*
             * Json loader support for *.json files.
             *
             * See: https://github.com/webpack/json-loader
             */
            {test: /\.json$/, use: 'json-loader'},
            {test: /\.(jpg|png|gif)$/, use: 'url-loader?limit=10000'},

            /* Raw loader support for *.html
             * Returns file content as string
             *
             * See: https://github.com/webpack/raw-loader
             */
            {test: /\.html$/, use: 'raw-loader', exclude: [ helpers.root('src/index.html') ]},
            {test: /\.(otf|ttf|woff|woff2)$/, use: 'url-loader?limit=10000'},
            {test: /\.(eot|svg)$/, use: 'file-loader'},

            /*
             * Typescript loader support for .ts and Angular 2 async routes via .async.ts
             * Replace templateUrl and stylesUrl with require()
             *
             * See: https://github.com/s-panferov/awesome-typescript-loader
             */
            {
                test: /\.ts$/,
                use: 'awesome-typescript-loader?{configFileName: "tsconfig.json"}',
                exclude: [
                    /\.(spec|e2e)\.ts$/
                ]
            },

            /*
             * See: https://github.com/TheLarkInn/angular2-template-loader
             */
            {
                test: /\.ts$/,
                use: [
                    'angular2-template-loader',
                    'angular-router-loader?loader=require&genDir=src&aot=false'
                ],
                exclude: [
                    /node_modules/
                ]
            }

        ].concat(extraRules)
    },

    /*
     * Add additional plugins to the compiler.
     *
     * See: http://webpack.github.io/docs/configuration.html#plugins
     */
    plugins: [

        /**
         * Plugin: ContextReplacementPlugin
         * Description: Provides context to Angular's use of System.import
         *
         * See: https://webpack.github.io/docs/list-of-plugins.html#contextreplacementplugin
         * See: https://github.com/angular/angular/issues/11580
         */
        new ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            helpers.root('./src')
        ),

        /*
         * Plugin: CopyWebpackPlugin
         * Description: Copy files and directories in webpack.
         *
         * Copies project static assets.
         *
         * See: https://www.npmjs.com/package/copy-webpack-plugin
         */
        new CopyWebpackPlugin([{
            from: 'src/assets',
            to: 'assets'
        }]),

        /*
         * Plugin: HtmlWebpackPlugin
         * Description: Simplifies creation of HTML files to serve your webpack bundles.
         * This is especially useful for webpack bundles that include a hash in the filename
         * which changes every compilation.
         *
         * See: https://github.com/ampedandwired/html-webpack-plugin
         */
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            title: METADATA.title,
            chunksSortMode: 'dependency',
            metadata: METADATA,
            inject: 'body'
        }),

        /*
         * Plugin: ScriptExtHtmlWebpackPlugin
         * Description: Enhances html-webpack-plugin functionality
         * with different deployment options for your scripts including:
         *
         * See: https://github.com/numical/script-ext-html-webpack-plugin
         */
        new ScriptExtHtmlWebpackPlugin({
            defaultAttribute: 'defer'
        }),

        /*
         * Plugin: HtmlHeadConfigPlugin
         * Description: Generate html tags based on javascript maps.
         *
         * If a publicPath is set in the webpack output configuration, it will be automatically added to
         * href attributes, you can disable that by adding a "=href": false property.
         * You can also enable it to other attribute by settings "=attName": true.
         *
         * The configuration supplied is map between a location (key) and an element definition object (value)
         * The location (key) is then exported to the template under then htmlElements property in webpack configuration.
         *
         * Example:
         *  Adding this plugin configuration
         *  new HtmlElementsPlugin({
         *    headTags: { ... }
         *  })
         *
         *  Means we can use it in the template like this:
         *  <%= webpackConfig.htmlElements.headTags %>
         *
         * Dependencies: HtmlWebpackPlugin
         */
        new HtmlElementsPlugin({
            headTags: require('./head-config.common')
        })
    ].concat(extraPlugins),
};
