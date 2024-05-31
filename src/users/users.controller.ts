import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  save(@Body() userDto: UserDto) {
    return this.usersService.save(userDto);
  }
 
  @Get(':auth0Id')
  getByAuth0Id(@Param('auth0Id') auth0Id: string) {
    return this.usersService.getByAuth0Id(auth0Id);
  }

}
