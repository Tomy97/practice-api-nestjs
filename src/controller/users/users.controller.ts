import { Controller, Get } from '@nestjs/common';
import { UsersI } from '../../interfaces/UsersI'
@Controller('users')
export class UsersController {
  users: UsersI[] = [];
  constructor() {
    this.users = [
      {
        name: 'John',
        lastName: 'Doe',
        age: 30
      },
      {
        name: 'Jane',
        lastName: 'Doe',
        age: 25
      }
    ]
  }


  @Get()
  getUsers(): UsersI[] {
    return this.users;
  }
}
