import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ItemSubTypesService } from './item-subtype.service';
import { CreateItemSubtypeDto } from './dto/create-item-subtype.dto';
import { UpdateItemSubtypeDto } from './dto/update-item-subtype.dto';

@Controller('item-sub-type')
export class ItemSubTypesController {
  constructor(private readonly itemSubTypesService: ItemSubTypesService) {}

  @Post()
  create(@Body() createItemSubTypeDto: CreateItemSubtypeDto) {
    return this.itemSubTypesService.create(createItemSubTypeDto);
  }

  @Get()
  findAll() {
    return this.itemSubTypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.itemSubTypesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateItemSubTypeDto: UpdateItemSubtypeDto) {
    return this.itemSubTypesService.update(+id, updateItemSubTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.itemSubTypesService.remove(+id);
  }
}
