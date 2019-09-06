import { User } from '@libs/mocks/entities';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersController } from './users.controller';
import { UsersService } from './users.service';


@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {
    constructor(private userService: UsersService) {
        this.userService.apiCallCount().then((res: number) => {
            if (res === 0) {
                this.userService.generateInitial();
            }
        });
    }
}
