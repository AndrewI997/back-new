export class CreateItemDto {
    id: number;
    
    name: string;

    type: number;

    subType: number;

    kind: number;

    style: number;

    price: number;

    raiting: number;

    description?: string;
}
