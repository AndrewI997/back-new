import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ItemStyleService } from './item-style.service';
import { CreateItemStyleDto } from './dto/create-item-style.dto';
import { UpdateItemStyleDto } from './dto/update-item-style.dto';

@Controller('style')
export class ItemStyleController {
  constructor(private readonly itemStyleService: ItemStyleService) {}

  @Post()
  create(@Body() createItemStyleDto: CreateItemStyleDto) {
    return this.itemStyleService.create(createItemStyleDto);
  }

  @Get()
  findAll() {
    return this.itemStyleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.itemStyleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateItemStyleDto: UpdateItemStyleDto) {
    return this.itemStyleService.update(+id, updateItemStyleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.itemStyleService.remove(+id);
  }
}
