/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose/types/inferrawdoctype" />
import { Data } from './scehma/data.schema';
import { Model } from 'mongoose';
import { User } from '../auth/schemas/user.schema';
import { CreateDataDto } from './dto/createdatadto.dto';
export declare class DataService {
    private readonly dataModel;
    constructor(dataModel: Model<Data>);
    findAll(): Promise<Data[]>;
    create(data: any, user: User): Promise<Data>;
    findByPermalink(permalink: string): Promise<Data>;
    findAllByCategory(categoryName: string): Promise<Data[]>;
    updateById(id: string, updateData: CreateDataDto): Promise<Data>;
    delete(id: string): Promise<void>;
}
