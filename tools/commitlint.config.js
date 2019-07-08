module.exports = {
    extends: ['@ptsecurity/commitlint-config'],
    rules: {
        'scope-enum': [
            2,
            'always',
            [
                'ci',
                'users',
                'common'
            ]
        ]
    }
};
