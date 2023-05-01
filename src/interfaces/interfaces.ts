export interface Watch {
    id?: number;
    attributes: {
        code?: string;
        model?: string;
        maker?: string;
        price?: number
        referenceNumber?: string;
        movement?: string;
        material?: string;
        diameter?: number;
        colorDial?: string;
        watchBand?: string;
        papers?: string;
        box?: string;
        year?: number;
        condition?: string;
        description?: string;
        dateCreated?: string;
        dateLastUpdate?: string;
        creator?: number;
        img? : string;
        imgLinks?: Object;
        published?:boolean;
    }
}