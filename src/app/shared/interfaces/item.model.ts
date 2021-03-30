import { MediaUrl } from './media-url.model';

export interface Item {
    title: string;
    link: string;
    media: MediaUrl;
    description: string;
    author: string;
    author_id: string;
    tags: string;
}