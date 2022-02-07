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
exports.AmbassadeurService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const bcrypt = require("bcryptjs");
let AmbassadeurService = class AmbassadeurService {
    constructor(ambassadeurModel) {
        this.ambassadeurModel = ambassadeurModel;
    }
    async Addambassadeur(ambassadeur) {
        const hashedPassword = await bcrypt.hash(ambassadeur.psw, 10);
        const newambassadeur = new this.ambassadeurModel({
            FirstName: ambassadeur.FirstName,
            LastName: ambassadeur.LastName,
            mail: ambassadeur.mail,
            psw: hashedPassword,
            Phone: ambassadeur.Phone,
            cin: ambassadeur.cin,
            Gender: ambassadeur.Gender,
            DateOfBirth: ambassadeur.DateOfBirth,
            governorate: ambassadeur.governorate,
            university: ambassadeur.university,
        });
        return newambassadeur.save();
    }
    async allambassadeur() {
        return await this.ambassadeurModel.find().exec();
    }
    async getambassabyid(id) {
        let ambassadeu = await this.ambassadeurModel.findById(id).exec();
        return {
            id: ambassadeu.id,
            FirstName: ambassadeu.FirstName,
            LastName: ambassadeu.LastName,
            mail: ambassadeu.mail,
            Phone: ambassadeu.Phone,
            Gender: ambassadeu.Gender,
            DateOfBirth: ambassadeu.DateOfBirth,
            governorate: ambassadeu.governorate,
            university: ambassadeu.university,
        };
    }
};
AmbassadeurService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Ambassadeur')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], AmbassadeurService);
exports.AmbassadeurService = AmbassadeurService;
//# sourceMappingURL=ambassadeur.service.js.map