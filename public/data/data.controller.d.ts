import { DataService } from './data.service';
import { Data } from './scehma/data.schema';
import { CreateDataDto } from './dto/createdatadto.dto';
export declare class DataController {
    private dataservice;
    constructor(dataservice: DataService);
    getAllBooks(): Promise<Data[]>;
    create(data: CreateDataDto, req: any): Promise<Data>;
    getByPermalink(permalink: string): Promise<Data>;
    getByCategory(categoryName: string): Promise<Data[]>;
    updateByid(id: string, updateData: CreateDataDto, req: any): Promise<Data>;
    deleteById(id: string, req: any): Promise<void>;
}
