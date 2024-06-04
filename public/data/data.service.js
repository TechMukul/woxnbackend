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
exports.DataService = void 0;
const common_1 = require("@nestjs/common");
const data_schema_1 = require("./scehma/data.schema");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let DataService = class DataService {
    constructor(dataModel) {
        this.dataModel = dataModel;
    }
    async findAll() {
        return await this.dataModel.find().exec();
    }
    async create(data, user) {
        const info = Object.assign(data, { user: user._id });
        const res = await this.dataModel.create(info);
        return res;
    }
    async findByPermalink(permalink) {
        return await this.dataModel.findOne({ permaLink: permalink }).exec();
    }
    async findAllByCategory(categoryName) {
        return await this.dataModel.find({ category: categoryName }).exec();
    }
    async updateById(id, updateData) {
        return await this.dataModel.findByIdAndUpdate(id, updateData, { new: true }).exec();
    }
    async delete(id) {
        const result = await this.dataModel.deleteOne({ _id: id }).exec();
        if (result.deletedCount === 0) {
            throw new common_1.NotFoundException('Data not found');
        }
    }
};
exports.DataService = DataService;
exports.DataService = DataService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(data_schema_1.Data.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], DataService);
//# sourceMappingURL=data.service.js.map