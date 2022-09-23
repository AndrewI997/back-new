import { Injectable } from '@nestjs/common';
import { CreatePhotoGalleryDto } from './dto/create-photo-gallery.dto';
import { UpdatePhotoGalleryDto } from './dto/update-photo-gallery.dto';

@Injectable()
export class PhotoGalleryService {
  create(createPhotoGalleryDto: CreatePhotoGalleryDto) {
    return 'This action adds a new photoGallery';
  }

  findAll() {
    return `This action returns all photoGallery`;
  }

  findOne(id: number) {
    return `This action returns a #${id} photoGallery`;
  }

  update(id: number, updatePhotoGalleryDto: UpdatePhotoGalleryDto) {
    return `This action updates a #${id} photoGallery`;
  }

  remove(id: number) {
    return `This action removes a #${id} photoGallery`;
  }
}
