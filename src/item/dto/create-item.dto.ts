export class CreateItemDto {
    id: number;
    
    name: string;

    price?: number;

    description?: string;

    typeId: number;

    subTypeId: number;

    kindId?: number;

    styleId?: number;
    
}
