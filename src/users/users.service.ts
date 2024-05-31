import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  async save(userDto: UserDto) {
    const auth0Id = userDto.auth0Id;
    var user = await this.userRepository.findOne({ where: { auth0Id } });
    
    if(!user) {
      user = this.userRepository.create(userDto);
    }

    return await this.userRepository.save(user);
  }

  async getByAuth0Id(auth0Id: string) {
    return await this.userRepository.findOne({ where: { auth0Id } });
  }

}