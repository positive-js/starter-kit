import './polyfills.browser';
import './vendor.browser';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

/*
* App Component
* our top level component that holds all of our components
*/
import { AppModule } from './app/app.module';

export function main(): Promise<any> {
    return platformBrowserDynamic()
        .bootstrapModule(AppModule)
        .catch((err) => console.error(err));
}

function bootLoader(main) {
    if (document.readyState === 'complete') {
        main();
    } else {
        document.addEventListener('DOMContentLoaded', main);
    }
}

bootLoader(main);
