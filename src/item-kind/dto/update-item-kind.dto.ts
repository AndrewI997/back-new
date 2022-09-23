import { PartialType } from '@nestjs/mapped-types';
import { CreateItemKindDto } from './create-item-kind.dto';

export class UpdateItemKindDto extends PartialType(CreateItemKindDto) {}
