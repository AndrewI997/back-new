import { ForbiddenException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { UserEntity } from '../user/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../user/dto/create-user.dto';
// import ApiError from 'src/errors/ValidateError';


@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService
  ) { }

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(email);
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  generateJwtToken(user: { id: number, email: string }) {
    const payload = { sub: user.id, email: user.email }
    return this.jwtService.sign(payload);
  }

  async login(user: UserEntity) {
    const { ...userData } = user;
    return {
      ...userData,
      token: this.generateJwtToken(userData)
    };
  }

  async registration(dto: CreateUserDto) {
    const candidate = await this.usersService.findOne(dto.email)
    if (candidate) {
      throw new HttpException('', HttpStatus.BAD_REQUEST)
    }
    try {
      const { ...userData } = await this.usersService.create(
        {
          id: dto.id,
          email: dto.email,
          password: dto.password,
        }
      )
      return {
        ...userData,
        token: this.generateJwtToken(userData)
      }
    } catch {
      throw new HttpException('', HttpStatus.BAD_GATEWAY)
    }
  }
}
