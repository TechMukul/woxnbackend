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
exports.CatorgoryController = void 0;
const common_1 = require("@nestjs/common");
const category_service_1 = require("./category.service");
const createcategorydto_dto_1 = require("./dto/createcategorydto.dto");
const passport_1 = require("@nestjs/passport");
let CatorgoryController = class CatorgoryController {
    constructor(categoryservice) {
        this.categoryservice = categoryservice;
    }
    async getAllBooks() {
        return this.categoryservice.findAll();
    }
    async create(data, req) {
        return this.categoryservice.create(data, req.user);
    }
    async updateById(id, updateData, req) {
        return this.categoryservice.update(id, updateData);
    }
    async deleteById(id, req) {
        return this.categoryservice.delete(id);
    }
};
exports.CatorgoryController = CatorgoryController;
__decorate([
    (0, common_1.Get)('all-category'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CatorgoryController.prototype, "getAllBooks", null);
__decorate([
    (0, common_1.Post)('new-category'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CatorgoryController.prototype, "create", null);
__decorate([
    (0, common_1.Put)('update/:id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, createcategorydto_dto_1.CreatecategoryDto, Object]),
    __metadata("design:returntype", Promise)
], CatorgoryController.prototype, "updateById", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CatorgoryController.prototype, "deleteById", null);
exports.CatorgoryController = CatorgoryController = __decorate([
    (0, common_1.Controller)('data'),
    __metadata("design:paramtypes", [category_service_1.CategoryService])
], CatorgoryController);
//# sourceMappingURL=category.controller.js.map