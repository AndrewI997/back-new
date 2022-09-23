import { PartialType } from '@nestjs/mapped-types';
import { CreateItemSubtypeDto } from './create-item-subtype.dto';

export class UpdateItemSubtypeDto extends PartialType(CreateItemSubtypeDto) {}
