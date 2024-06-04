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
exports.CategoryService = void 0;
const common_1 = require("@nestjs/common");
const categoryschema_1 = require("./scehma/categoryschema");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let CategoryService = class CategoryService {
    constructor(categoryModel) {
        this.categoryModel = categoryModel;
    }
    async findAll() {
        const info = await this.categoryModel.find();
        return info;
    }
    async create(category, user) {
        const info = Object.assign(category, { user: user._id });
        const res = await this.categoryModel.create(info);
        return res;
    }
    async findByPermalink(permalink) {
        const category = await this.categoryModel.findOne({ permaLink: permalink }).exec();
        if (!category) {
            throw new common_1.NotFoundException('Data not found');
        }
        return category;
    }
    async update(_id, updateCategoryDto) {
        const existingData = await this.categoryModel.findById(_id).exec();
        if (!existingData) {
            throw new common_1.NotFoundException('Data not found');
        }
        existingData.name = updateCategoryDto.name;
        existingData.permaLink = updateCategoryDto.permaLink;
        return existingData.save();
    }
    async delete(_id) {
        const result = await this.categoryModel.deleteOne({ _id }).exec();
        if (result.deletedCount === 0) {
            throw new common_1.NotFoundException('Category not found');
        }
    }
};
exports.CategoryService = CategoryService;
exports.CategoryService = CategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(categoryschema_1.Category.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CategoryService);
//# sourceMappingURL=category.service.js.map