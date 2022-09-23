import { PartialType } from '@nestjs/mapped-types';
import { CreateItemStyleDto } from './create-item-style.dto';

export class UpdateItemStyleDto extends PartialType(CreateItemStyleDto) {}
