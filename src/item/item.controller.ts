import { CACHE_MANAGER, Inject, UseInterceptors, CacheInterceptor, Controller, Get, Post, Body, Patch, Param, Delete, Query, UploadedFile } from '@nestjs/common';
import { Cache } from 'cache-manager';

import { ItemService } from './item.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { FileInterceptor } from '@nestjs/platform-express';


@Controller('item')
@UseInterceptors(CacheInterceptor)
export class ItemController {
  constructor(
    private readonly itemService: ItemService,
  ) { }

  @Post()
  @UseInterceptors(FileInterceptor('img'))
  create(@Body() createItemDto: CreateItemDto,
         @UploadedFile() img) {
    return this.itemService.create(createItemDto, img);
  }

  @Get('all')
  findAll() {
    return this.itemService.findAll();
  }

  @Get('id/:id')
  findOne(@Param('id') item: Partial<CreateItemDto>) {
    return this.itemService.findOne(item);
  }

  @Get('all/:typeId')
  findByType(@Param() @Query('item') item: Partial<CreateItemDto>) {
    return this.itemService.findByType(item)
  }

  @Get('all/:typeId/:subTypeId')
  findBySubTypeId(@Param() @Query('item') item: Partial<CreateItemDto>) {
    return this.itemService.findBySubTypeId(item);
  }

  @Get('all/:typeId/:subTypeId/:styleId')
  findByStyleId(@Param() @Query('item') item: Partial<CreateItemDto>) {
    return this.itemService.findByStyleId(item);
  }

  @Get('all/:typeId/:subTypeId/:styleId/:kindId')
  findByKindId(@Param() @Query('item') item: Partial<CreateItemDto>) {
    return this.itemService.findByKindId(item);
  }

  @Get('typestyle/:typeId/:styleId')
  findByTypeStyleId(@Param() @Query('item') item: Partial<CreateItemDto>) {
    return this.itemService.findByTypeStyleId(item);
  }

  @Get('subtype/:subTypeId')
  findByTypeSubTypeId(@Param() @Query('item') item: Partial<CreateItemDto>) {
    return this.itemService.findByTypeSubTypeId(item);
  }

  @Get('subtypestyle/:subTypeId/:styleId')
  findByTypeSubTypeStyleId(@Param() @Query('item') item: Partial<CreateItemDto>) {
    return this.itemService.findByTypeSubTypeStyleId(item);
  }

  @Get('style/:styleId')
  findStyleByStyleId(@Param() @Query('item') item: Partial<CreateItemDto>) {
    return this.itemService.findStyleByStyleId(item);
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
