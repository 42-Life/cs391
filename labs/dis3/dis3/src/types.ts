export type Thumbnail = {
    lqip: string;
    width: number;
    height: number;
    alt_text: string;
};

export type Artwork = {
    id: number;
    title: string;
    thumbnail: Thumbnail;
    place_of_origin: string;
    medium_display: string;
    is_public_domain: boolean;
    is_on_view: boolean;
    image_id: string;
}