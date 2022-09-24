import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ItemStylesService } from './item-style.service';
import { CreateItemStyleDto } from './dto/create-item-style.dto';
import { UpdateItemStyleDto } from './dto/update-item-style.dto';

@Controller('item-style')
export class ItemStylesController {
  constructor(private readonly itemStylesService: ItemStylesService) {}

  @Post()
  create(@Body() createItemStyleDto: CreateItemStyleDto) {
    return this.itemStylesService.create(createItemStyleDto);
  }

  @Get()
  findAll() {
    return this.itemStylesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.itemStylesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateItemStyleDto: UpdateItemStyleDto) {
    return this.itemStylesService.update(+id, updateItemStyleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.itemStylesService.remove(+id);
  }
}
