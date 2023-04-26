"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ViteMailModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViteMailModule = void 0;
const common_1 = require("@nestjs/common");
const vitemail_service_1 = require("./vitemail.service");
let ViteMailModule = ViteMailModule_1 = class ViteMailModule {
    /** You need to register your account to vitemail */
    static register(
    /** Email and app password for google accounts */ options) {
        return {
            module: ViteMailModule_1,
            providers: [
                {
                    provide: 'VITEMAIL_OPTIONS',
                    useValue: options,
                },
                vitemail_service_1.ViteMailService,
            ],
            exports: [vitemail_service_1.ViteMailService],
        };
    }
};
ViteMailModule = ViteMailModule_1 = __decorate([
    (0, common_1.Module)({})
], ViteMailModule);
exports.ViteMailModule = ViteMailModule;
//# sourceMappingURL=vitemail.module.js.map