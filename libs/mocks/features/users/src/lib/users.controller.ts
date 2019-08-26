import { UserDto } from '@libs/mocks/dto';
import { Controller, Get, Query, Post, Body, Put, Delete, Param } from '@nestjs/common';

import { UsersAPIService } from './users.service';


@Controller('users')
export class UsersController {
    constructor(private usersApiService: UsersAPIService) {}

    @Get()
    findAll() {
        return this.usersApiService.apiCallFindAll();
    }

    @Get(':id')
    findOne(@Param('id')id: string) {
        return this.usersApiService.apiCallFindOne(id);
    }

    @Post()
    create(@Body() userDto: UserDto) {
        return this.usersApiService.apiCallCreate(userDto);
    }

    @Put(':id')
    update(@Param('id')id: string, @Body() userDto: Partial<UserDto>) {
        return this.usersApiService.apiCallUpdate(id, userDto);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.usersApiService.apiCallDelete(id);
    }

    @Delete()
    deleteSelected(@Param('ids') ids: string[]) {
        return this.usersApiService.apiCallDeleteSelected(ids);
    }

}
