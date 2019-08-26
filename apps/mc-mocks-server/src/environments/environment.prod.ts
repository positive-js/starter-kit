export const environment = {
    production: true,

    server: {
        host: process.env.HOST || '0.0.0.0',
        domainUrl: process.env.DOMAIN_URL || 'http://localhost:4545',
        port: process.env.PORT || 4545, // tslint:disable-line
        globalPrefix: '/api'
    }

};
