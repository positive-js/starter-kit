import { UserDto } from '@libs/mocks/dto';
import { Controller, Get, Query, Post, Body, Put, Delete, Param, HttpCode, HttpStatus } from '@nestjs/common';

import { UsersService } from './users.service';


@Controller('users')
export class UsersController {
    constructor(private usersApiService: UsersService) {}

    @Get()
    findAll() {
        return this.usersApiService.apiCallFindAll();
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    findOne(@Param('id')id: string) {
        return this.usersApiService.apiCallFindOne(id);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() userDto: UserDto) {
        return this.usersApiService.apiCallCreate(userDto);
    }

    @Put(':id')
    @HttpCode(HttpStatus.ACCEPTED)
    update(@Param('id')id: string, @Body() userDto: Partial<UserDto>) {
        return this.usersApiService.apiCallUpdate(id, userDto);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id') id: string) {
        return this.usersApiService.apiCallDelete(id);
    }

    @Delete()
    @HttpCode(HttpStatus.NO_CONTENT)
    deleteSelected(@Param('ids') ids: string[]) {
        return this.usersApiService.apiCallDeleteSelected(ids);
    }

}
