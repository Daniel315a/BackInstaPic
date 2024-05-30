import {
    IsNotEmpty,
    MinLength,
    MaxLength,
    IsEmail,
    IsDate,
    IsDateString,
  } from 'class-validator';
  
export class UserDto {

    id: number = 0;
    @IsNotEmpty({ message: 'Auth0Id is required' })
    auth0Id: string;
    nickName: string;
    email: string;
    familyName: string;
    givenName: string;
    birthDate: Date;

}