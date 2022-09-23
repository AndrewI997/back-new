import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ItemKindService } from './item-kind.service';
import { CreateItemKindDto } from './dto/create-item-kind.dto';
import { UpdateItemKindDto } from './dto/update-item-kind.dto';

@Controller('item-kind')
export class ItemKindController {
  constructor(private readonly itemKindService: ItemKindService) {}

  @Post()
  create(@Body() createItemKindDto: CreateItemKindDto) {
    return this.itemKindService.create(createItemKindDto);
  }

  @Get()
  findAll() {
    return this.itemKindService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.itemKindService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateItemKindDto: UpdateItemKindDto) {
    return this.itemKindService.update(+id, updateItemKindDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.itemKindService.remove(+id);
  }
}
