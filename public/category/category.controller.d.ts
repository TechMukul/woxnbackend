import { CategoryService } from './category.service';
import { Category } from './scehma/categoryschema';
import { CreatecategoryDto } from './dto/createcategorydto.dto';
export declare class CatorgoryController {
    private categoryservice;
    constructor(categoryservice: CategoryService);
    getAllBooks(): Promise<Category[]>;
    create(data: any, req: any): Promise<Category>;
    updateById(id: string, updateData: CreatecategoryDto, req: any): Promise<Category>;
    deleteById(id: string, req: any): Promise<void>;
}
