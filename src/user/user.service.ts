import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';


@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private repository: Repository<UserEntity>,
  ) { }

  public async create(dto: CreateUserDto) {
    return await this.repository.save(dto)
  }

  findAll(): Promise<UserEntity[]> {
    return this.repository.find();
  }

  findOne(email: string): Promise<UserEntity> {
    return this.repository.findOneBy({email});
  }

  async remove(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
