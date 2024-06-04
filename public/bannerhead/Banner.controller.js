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
exports.BannerController = void 0;
const common_1 = require("@nestjs/common");
const Banner_service_1 = require("./Banner.service");
const createbanner_dto_1 = require("./dto/createbanner.dto");
const passport_1 = require("@nestjs/passport");
let BannerController = class BannerController {
    constructor(bannerservice) {
        this.bannerservice = bannerservice;
    }
    async getAllBanners() {
        return this.bannerservice.findAll();
    }
    async create(data, req) {
        return this.bannerservice.create(data, req.user);
    }
    async getByPermalink(permalink) {
        try {
            return await this.bannerservice.findByPermalink(permalink);
        }
        catch (error) {
            throw new common_1.NotFoundException(error.message);
        }
    }
    async getByCategory(categoryName) {
        try {
            return await this.bannerservice.findAllByCategory(categoryName);
        }
        catch (error) {
            throw new common_1.NotFoundException(error.message);
        }
    }
    async updateByPermalink(permalink, updateData) {
        return this.bannerservice.update(permalink, updateData);
    }
    async deleteById(id) {
        return this.bannerservice.delete(id);
    }
};
exports.BannerController = BannerController;
__decorate([
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BannerController.prototype, "getAllBanners", null);
__decorate([
    (0, common_1.Post)('post'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createbanner_dto_1.CreateBannerDto, Object]),
    __metadata("design:returntype", Promise)
], BannerController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('permalink/:permalink'),
    __param(0, (0, common_1.Param)('permalink')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BannerController.prototype, "getByPermalink", null);
__decorate([
    (0, common_1.Get)('category/:categoryName'),
    __param(0, (0, common_1.Param)('categoryName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BannerController.prototype, "getByCategory", null);
__decorate([
    (0, common_1.Put)(':permalink'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, common_1.Param)('permalink')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, createbanner_dto_1.CreateBannerDto]),
    __metadata("design:returntype", Promise)
], BannerController.prototype, "updateByPermalink", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BannerController.prototype, "deleteById", null);
exports.BannerController = BannerController = __decorate([
    (0, common_1.Controller)('data/head'),
    __metadata("design:paramtypes", [Banner_service_1.BannerService])
], BannerController);
//# sourceMappingURL=Banner.controller.js.map