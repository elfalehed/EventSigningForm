"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersSchema = void 0;
const Mongoose = require("mongoose");
const user_role_1 = require("../enum/user-role");
exports.UsersSchema = new Mongoose.Schema({
    FirstName: { type: String },
    LastName: { type: String },
    mail: { type: String, required: true },
    Gender: { type: String },
    governorate: { type: String },
    university: { type: String },
    pay: { type: Boolean },
    Phone: { type: Number },
    cin: { type: Number },
    DateOfBirth: { type: Date },
    role: { type: String, default: user_role_1.UserRoleEnum.Participant }
});
//# sourceMappingURL=user.model.js.map