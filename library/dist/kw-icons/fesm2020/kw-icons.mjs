import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class KwIconsService {
    constructor() { }
}
KwIconsService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: KwIconsService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
KwIconsService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: KwIconsService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: KwIconsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class KwIconsComponent {
}
KwIconsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: KwIconsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
KwIconsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: KwIconsComponent, selector: "lib-kw-icons", ngImport: i0, template: `
    <p>
      kw-icons works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: KwIconsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-kw-icons', template: `
    <p>
      kw-icons works!
    </p>
  ` }]
        }] });

class KwIconsModule {
}
KwIconsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: KwIconsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
KwIconsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: KwIconsModule, declarations: [KwIconsComponent], exports: [KwIconsComponent] });
KwIconsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: KwIconsModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: KwIconsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        KwIconsComponent
                    ],
                    imports: [],
                    exports: [
                        KwIconsComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of kw-icons
 */

/**
 * Generated bundle index. Do not edit.
 */

export { KwIconsComponent, KwIconsModule, KwIconsService };
//# sourceMappingURL=kw-icons.mjs.map
