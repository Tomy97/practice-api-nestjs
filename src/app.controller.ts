import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
interface UsersI {
  name: String;
  lastName: String;
  age: Number;
}
@Controller()
export class AppController {
  users = [];
  constructor(private readonly appService: AppService) {
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
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/users')
  getUsers(): string[] {
    return this.users; 
  }
}
