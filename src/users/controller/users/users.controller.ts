import { Body, Controller, Get, Param } from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';
// import { isNumberObject } from 'util/types';

@Controller('users')
export class UsersController {
    constructor(
        private usersService: UsersService
    ) {}

    @Get(':id')
    getUsers(@Param('id') id: number) {
        return this.usersService.getUserById(id);
    }
}
