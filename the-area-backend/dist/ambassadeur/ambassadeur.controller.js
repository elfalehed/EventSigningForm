"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AmbassadeurController = void 0;
const common_1 = require("@nestjs/common");
const ambassadeur_service_1 = require("./ambassadeur.service");
let AmbassadeurController = class AmbassadeurController {
    constructor(ambservice) {
        this.ambservice = ambservice;
    }
    async registreAmbassadeur(Ambasadeur) {
        const ambasadeur = this.ambservice.Addambassadeur(Ambasadeur);
        console.log(ambasadeur);
        return ambasadeur;
    }
    async getAllUser() {
        console.log("hello");
        return await this.ambservice.allambassadeur();
    }
    async getUser(params) {
        return await this.ambservice.getambassabyid(params.id);
    }
};
__decorate([
    (0, common_1.Post)('addamb'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AmbassadeurController.prototype, "registreAmbassadeur", null);
__decorate([
    (0, common_1.Get)('allamb'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AmbassadeurController.prototype, "getAllUser", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AmbassadeurController.prototype, "getUser", null);
AmbassadeurController = __decorate([
    (0, common_1.Controller)('ambassadeur'),
    __metadata("design:paramtypes", [ambassadeur_service_1.AmbassadeurService])
], AmbassadeurController);
exports.AmbassadeurController = AmbassadeurController;
//# sourceMappingURL=ambassadeur.controller.js.map