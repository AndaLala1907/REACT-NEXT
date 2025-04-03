import { Album } from "./Album";

export interface Artist {
    id: number;
    name: string;
    cover: string;
    bio: string;
    albums: Album[];
}
