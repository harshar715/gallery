import { Item } from './item.model';

export interface ImageResponse {
    title: string;
    link: string;
    description: string;
    generator: string;
    items: Item[];
}