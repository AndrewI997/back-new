import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ItemSubtypeService } from './item-subtype.service';
import { CreateItemSubtypeDto } from './dto/create-item-subtype.dto';
import { UpdateItemSubtypeDto } from './dto/update-item-subtype.dto';

@Controller('item-subtype')
export class ItemSubtypeController {
  constructor(private readonly itemSubtypeService: ItemSubtypeService) {}

  @Post()
  create(@Body() createItemSubtypeDto: CreateItemSubtypeDto) {
    return this.itemSubtypeService.create(createItemSubtypeDto);
  }

  @Get()
  findAll() {
    return this.itemSubtypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.itemSubtypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateItemSubtypeDto: UpdateItemSubtypeDto) {
    return this.itemSubtypeService.update(+id, updateItemSubtypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.itemSubtypeService.remove(+id);
  }
}
