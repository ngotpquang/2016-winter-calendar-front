import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

// The bootstrap process in the final release of Angular 2 requires a module instead of a component
platformBrowserDynamic().bootstrapModule(AppModule);
