"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AmbassadeurModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const ambassadeur_controller_1 = require("./ambassadeur.controller");
const ambassadeur_model_1 = require("./ambassadeur.model");
const ambassadeur_service_1 = require("./ambassadeur.service");
let AmbassadeurModule = class AmbassadeurModule {
};
AmbassadeurModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'Ambassadeur', schema: ambassadeur_model_1.AbassadeurSchema }])],
        controllers: [ambassadeur_controller_1.AmbassadeurController],
        providers: [ambassadeur_service_1.AmbassadeurService]
    })
], AmbassadeurModule);
exports.AmbassadeurModule = AmbassadeurModule;
//# sourceMappingURL=ambassadeur.module.js.map