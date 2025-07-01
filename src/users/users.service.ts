import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Role } from '../common/enums/role.enum';

export type User = {
  id: number;
  email: string;
  password: string;
  role: Role;
};

@Injectable()
export class UsersService {

   private readonly users: User[] = [
    {
      id: 1,
      email: 'user@example.com',
      password: 'userpass',
      role: Role.USER,
    },
    // {
    //   id: 2,
    //   email: 'vendor@example.com',
    //   password: 'vendorpass',
    //   role: "Vendor",//Role.VENDOR,
    // },
    {
      id: 3,
      email: 'admin@example.com',
      password: 'adminpass',
      role: Role.ADMIN,
    },
  ];


  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

 async findByEmail(email: string): Promise<User | undefined> {
    return this.users.find((user) => user.email === email);
  }

  async findById(id: number): Promise<User | undefined> {
    return this.users.find((user) => user.id === id);
  }

}
