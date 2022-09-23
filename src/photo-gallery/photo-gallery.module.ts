import { Module } from '@nestjs/common';
import { PhotoGalleryService } from './photo-gallery.service';
import { PhotoGalleryController } from './photo-gallery.controller';

@Module({
  controllers: [PhotoGalleryController],
  providers: [PhotoGalleryService]
})
export class PhotoGalleryModule {}
