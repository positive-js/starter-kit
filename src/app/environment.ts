import { ApplicationRef, enableProdMode } from '@angular/core';

import { enableDebugTools, disableDebugTools } from '@angular/platform-browser';

let PROVIDERS: any[] = [];

let _decorateModuleRef = <T>(value: T): T => { return value; };

if (ENV === 'production') {
    enableProdMode();
    _decorateModuleRef = (modRef: any) => {
        disableDebugTools();

        return modRef;
    };

    PROVIDERS = [
        ...PROVIDERS
    ];
} else {
    // Development
    _decorateModuleRef = (modRef: any) => {
        const appRef = modRef.injector.get(ApplicationRef);
        const cmpRef = appRef.components[0];

        let _ng = (<any> window).ng;
        enableDebugTools(cmpRef);
        (<any> window).ng.probe = _ng.probe;
        (<any> window).ng.coreTokens = _ng.coreTokens;
        return modRef;
    };

    PROVIDERS = [
        ...PROVIDERS
    ];
}

export const decorateModuleRef = _decorateModuleRef;

export const ENV_PROVIDERS = [
    ...PROVIDERS
];
