import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from './entity/users.entity';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}
  users: User[] = [];

  getAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }
}
