"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbassadeurSchema = void 0;
const Mongoose = require("mongoose");
const user_role_1 = require("../enum/user-role");
exports.AbassadeurSchema = new Mongoose.Schema({
    FirstName: { type: String },
    LastName: { type: String },
    mail: { type: String, required: true },
    psw: { type: String },
    Phone: { type: Number },
    Gender: { type: String },
    governorate: { type: String },
    university: { type: String },
    cin: { type: Number },
    DateOfBirth: { type: Date },
    role: { type: String, default: user_role_1.UserRoleEnum.Ambassadeur }
});
//# sourceMappingURL=ambassadeur.model.js.map