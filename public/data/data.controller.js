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
exports.DataController = void 0;
const common_1 = require("@nestjs/common");
const data_service_1 = require("./data.service");
const createdatadto_dto_1 = require("./dto/createdatadto.dto");
const passport_1 = require("@nestjs/passport");
let DataController = class DataController {
    constructor(dataservice) {
        this.dataservice = dataservice;
    }
    async getAllBooks() {
        return this.dataservice.findAll();
    }
    async create(data, req) {
        return this.dataservice.create(data, req.user);
    }
    async getByPermalink(permalink) {
        try {
            return await this.dataservice.findByPermalink(permalink);
        }
        catch (error) {
            throw new common_1.NotFoundException(error.message);
        }
    }
    async getByCategory(categoryName) {
        try {
            return await this.dataservice.findAllByCategory(categoryName);
        }
        catch (error) {
            throw new common_1.NotFoundException(error.message);
        }
    }
    async updateByid(id, updateData, req) {
        return this.dataservice.updateById(id, updateData);
    }
    async deleteById(id, req) {
        return this.dataservice.delete(id);
    }
};
exports.DataController = DataController;
__decorate([
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DataController.prototype, "getAllBooks", null);
__decorate([
    (0, common_1.Post)('machine'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createdatadto_dto_1.CreateDataDto, Object]),
    __metadata("design:returntype", Promise)
], DataController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('permalink/:permalink'),
    __param(0, (0, common_1.Param)('permalink')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DataController.prototype, "getByPermalink", null);
__decorate([
    (0, common_1.Get)('category/:categoryName'),
    __param(0, (0, common_1.Param)('categoryName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DataController.prototype, "getByCategory", null);
__decorate([
    (0, common_1.Put)('machine/:id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, common_1.Param)(':id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, createdatadto_dto_1.CreateDataDto, Object]),
    __metadata("design:returntype", Promise)
], DataController.prototype, "updateByid", null);
__decorate([
    (0, common_1.Delete)('delete/Machine/:id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], DataController.prototype, "deleteById", null);
exports.DataController = DataController = __decorate([
    (0, common_1.Controller)('data'),
    __metadata("design:paramtypes", [data_service_1.DataService])
], DataController);
//# sourceMappingURL=data.controller.js.map