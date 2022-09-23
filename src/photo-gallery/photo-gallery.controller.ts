import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PhotoGalleryService } from './photo-gallery.service';
import { CreatePhotoGalleryDto } from './dto/create-photo-gallery.dto';
import { UpdatePhotoGalleryDto } from './dto/update-photo-gallery.dto';

@Controller('photo-gallery')
export class PhotoGalleryController {
  constructor(private readonly photoGalleryService: PhotoGalleryService) {}

  @Post()
  create(@Body() createPhotoGalleryDto: CreatePhotoGalleryDto) {
    return this.photoGalleryService.create(createPhotoGalleryDto);
  }

  @Get()
  findAll() {
    return this.photoGalleryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.photoGalleryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePhotoGalleryDto: UpdatePhotoGalleryDto) {
    return this.photoGalleryService.update(+id, updatePhotoGalleryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.photoGalleryService.remove(+id);
  }
}
