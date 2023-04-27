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
exports.ViteMailService = void 0;
const common_1 = require("@nestjs/common");
const nodemailer_1 = require("nodemailer");
let ViteMailService = class ViteMailService {
    constructor(vitemailConfig) {
        this.vitemailConfig = vitemailConfig;
    }
    /**
     * This function will trigger the sending of the email provided that you pass the right info
     */
    sendEmail(
    /** The email details you want to send */ emailDetails) {
        try {
            // keeping it simple without any template
            const mailOptions = {
                to: emailDetails.to,
                from: "ashrafchitambaa3@gmail.com",
                replyTo: emailDetails.replyTo,
                subject: emailDetails.subject,
                sender: emailDetails.sender,
                text: "Notification",
                html: `Hello <strong>${emailDetails.receiver}</strong>,  ${emailDetails.message}`,
            };
            const transporter = (0, nodemailer_1.createTransport)({
                service: "gmail",
                port: 587,
                auth: {
                    user: this.vitemailConfig.email,
                    pass: this.vitemailConfig.password,
                },
                secure: false,
                connectionTimeout: 3000,
            });
            // sending the email
            return new Promise((resolve, reject) => {
                transporter.sendMail(mailOptions, (error, info) => {
                    if (error)
                        reject(error);
                    resolve(info);
                });
            });
        }
        catch (error) {
            return error;
        }
    }
};
ViteMailService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)("VITEMAIL_OPTIONS")),
    __metadata("design:paramtypes", [Object])
], ViteMailService);
exports.ViteMailService = ViteMailService;
//# sourceMappingURL=vitemail.service.js.map