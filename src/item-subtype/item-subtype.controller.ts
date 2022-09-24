import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ItemSubtypeService } from './item-subtype.service';
import { CreateItemSubtypeDto } from './dto/create-item-subtype.dto';
import { UpdateItemSubtypeDto } from './dto/update-item-subtype.dto';

@Controller('subtype')
export class ItemSubtypeController {
  constructor(private readonly ItemSubtypeService: ItemSubtypeService) {}

  @Post()
  create(@Body() createItemSubTypeDto: CreateItemSubtypeDto) {
    return this.ItemSubtypeService.create(createItemSubTypeDto);
  }

  @Get()
  findAll() {
    return this.ItemSubtypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ItemSubtypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateItemSubTypeDto: UpdateItemSubtypeDto) {
    return this.ItemSubtypeService.update(+id, updateItemSubTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ItemSubtypeService.remove(+id);
  }
}
