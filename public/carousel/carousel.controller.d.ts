import { CarouselService } from './carousel.service';
import { Carousel } from './scehma/carouselschema';
import { CreatecarouselDto } from './dto/createcarousel.dto';
export declare class CarouselController {
    private carouselservice;
    constructor(carouselservice: CarouselService);
    getAllBooks(): Promise<Carousel[]>;
    create(data: any, req: any): Promise<Carousel>;
    updateByPermalink(permalink: string, updateData: CreatecarouselDto, req: any): Promise<Carousel>;
    deleteCarousel(id: string): Promise<Carousel>;
}
