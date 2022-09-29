import { CACHE_MANAGER, Inject, UseInterceptors, CacheInterceptor, Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { Cache } from 'cache-manager';

import { ItemService } from './item.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';


@Controller('item')
@UseInterceptors(CacheInterceptor)
export class ItemController {
  constructor(
    private readonly itemService: ItemService,
    ) {}

  @Post()
  create(@Body() createItemDto: CreateItemDto) {
    return this.itemService.create(createItemDto);
  }

  @Get()
  findAll() {
    return this.itemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') item: Partial<CreateItemDto>) {
    return this.itemService.findOne(item);
  }
 
  @Get('query/:typeId')
   findByType(@Param() @Query('item') item: Partial<CreateItemDto>) {
    return this.itemService.findByType(item)
  }

  @Get('query/:typeId/:subTypeId')
  findBySubTypeId(@Param() @Query('item') item: Partial<CreateItemDto>) {
    return this.itemService.findBySubTypeId(item);
  }

  @Get('query/:typeId/:subTypeId/:kindId')
  findByKindId(@Param() @Query('item') item: Partial<CreateItemDto> ) {
    return this.itemService.findByKindId(item);
  }

  @Get('query/:typeId/:subTypeId/:kindId/:styleId')
  findByStyleId(@Param() @Query('item') item: Partial<CreateItemDto> ) {
    return this.itemService.findByStyleId(item);
  }

  @Patch(':id')
  update(@Param('id') item: Partial<CreateItemDto>, @Body() updateItemDto: UpdateItemDto) {
    return this.itemService.update(item, updateItemDto);
  }

  @Delete(':id')
  remove(@Param('id') item: Partial<CreateItemDto>) {
    return this.itemService.remove(item);
  }
}
