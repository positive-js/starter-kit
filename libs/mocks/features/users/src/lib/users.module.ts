import { User } from '@libs/mocks/entities';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersController } from './users.controller';
import { UsersAPIService } from './users.service';


@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersAPIService]
})
export class UsersModule {
    constructor(private userService: UsersAPIService) {
        this.userService.apiCallCount().then((res: number) => {
            if (res === 0) {
                this.userService.generateInitial();
            }
        });
    }
}
