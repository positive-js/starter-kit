import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from '../../../../dto/src/lib/users/user.dto';
import { User } from '@libs/mocks/entities';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {}

    async apiCallFindAll() {
        return this.userRepository.find();
    }

    async apiCallFindOne(userId: string) {
        return this.userRepository.findOne(userId);
    }

    async apiCallCreate(userDto: UserDto) {
        return this.userRepository.save(userDto);
    }

    async apiCallUpdate(id: string, userDto: Partial<UserDto>) {
        return this.userRepository.update(id, userDto);
    }

    async apiCallDelete(id: string) {
        return this.userRepository.delete(id);
    }

    async apiCallDeleteSelected(ids: string[] | []) {
        return this.userRepository.delete(ids);
    }

    async apiCallCount() {
        return this.userRepository.count();
    }

    async generateInitial() {
        const admin = {
            authMethod: 'local',
            deactivated: false,
            email: 'admin@mock.mc',
            firstName: 'Admin',
            login: 'admin',
            passwordExpired: false,
            userRole: 'admin',
            language: 'en',
            lastName: '',
            tzName: 'UTC+00'
        };

        const users = [admin];

        for (let i = 0; i < 15; i++) {
            users.push({
                authMethod: 'local',
                deactivated: false,
                email: `mockedEmail#${i}@mock.mc`,
                firstName: `Mocked user #${i}`,
                login: `mockuser${i}`,
                passwordExpired: false,
                userRole: 'mocked',
                language: 'en',
                lastName: '',
                tzName: 'UTC'
            });
        }

        return this.userRepository.save(users);
    }
}
