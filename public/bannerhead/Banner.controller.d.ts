import { BannerService } from './Banner.service';
import { Banner } from './scehma/banner.schema';
import { CreateBannerDto } from './dto/createbanner.dto';
export declare class BannerController {
    private bannerservice;
    constructor(bannerservice: BannerService);
    getAllBanners(): Promise<Banner[]>;
    create(data: CreateBannerDto, req: any): Promise<Banner>;
    getByPermalink(permalink: string): Promise<Banner>;
    getByCategory(categoryName: string): Promise<Banner[]>;
    updateByPermalink(permalink: string, updateData: CreateBannerDto): Promise<Banner>;
    deleteById(id: string): Promise<void>;
}
