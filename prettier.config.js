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
                'apps/{pt-nad,pt-nad-e2e}/**/*.html',
            ],
            options: { parser: 'angular' },
        }
    ]
};
