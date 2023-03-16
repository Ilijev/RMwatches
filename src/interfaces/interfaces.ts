export interface Watch {
    id?: number;
    attributes: {
        code: number;
        model: string;
        maker: string;
        price: number
        referenceNumber: string;
        movement: string;
        material: string;
        diameter: number;
        colorDial: string;
        watchBand: string;
        boxPapers: boolean;
        year: number;
        condition: string;
        description: string;
        dateCreated?: string;
        dateLastUpdate?: string;
        creator?: number;
    }
}