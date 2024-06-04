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
exports.CarouselController = void 0;
const common_1 = require("@nestjs/common");
const carousel_service_1 = require("./carousel.service");
const createcarousel_dto_1 = require("./dto/createcarousel.dto");
const passport_1 = require("@nestjs/passport");
let CarouselController = class CarouselController {
    constructor(carouselservice) {
        this.carouselservice = carouselservice;
    }
    async getAllBooks() {
        return this.carouselservice.findAll();
    }
    async create(data, req) {
        return this.carouselservice.create(data, req.user);
    }
    async updateByPermalink(permalink, updateData, req) {
        return this.carouselservice.update(permalink, updateData);
    }
    async deleteCarousel(id) {
        return await this.carouselservice.deleteById(id);
    }
};
exports.CarouselController = CarouselController;
__decorate([
    (0, common_1.Get)('all-carousel'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CarouselController.prototype, "getAllBooks", null);
__decorate([
    (0, common_1.Post)('new-carousel'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CarouselController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(''),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, common_1.Param)(':permalink')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, createcarousel_dto_1.CreatecarouselDto, Object]),
    __metadata("design:returntype", Promise)
], CarouselController.prototype, "updateByPermalink", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CarouselController.prototype, "deleteCarousel", null);
exports.CarouselController = CarouselController = __decorate([
    (0, common_1.Controller)('carousels'),
    __metadata("design:paramtypes", [carousel_service_1.CarouselService])
], CarouselController);
//# sourceMappingURL=carousel.controller.js.map