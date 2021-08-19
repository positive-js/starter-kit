module.exports = {
    endOfLine: 'lf',
    printWidth: 120,
    singleQuote: true,
    tabWidth: 4,
    useTabs: false,
    overrides: [
        {
            // Add angular specific parser for all our angular templates
            files: [
                'libs/**/*.html',
                'apps/{mc-web}/**/*.html',
            ],
            options: { parser: 'angular' },
        }
    ]
};
