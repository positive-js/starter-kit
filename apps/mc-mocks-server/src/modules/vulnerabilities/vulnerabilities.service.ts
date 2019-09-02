import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as faker from 'faker';
import { Repository } from 'typeorm';

import { Vulnerability } from './vulnerability.entity';


@Injectable()
export class VulnerabilitiesService {
    constructor(@InjectRepository(Vulnerability) private readonly repository: Repository<Vulnerability>) {}

    async getList(): Promise<Vulnerability[] | []> {
        return this.repository.find();
    }

    async getOne(id: string): Promise<Vulnerability | null> {
        return this.repository.findOneOrFail(id);
    }

    async create(vulnerability: Partial<Vulnerability>) {
        return this.repository.save(vulnerability);
    }

    async update(id: string, item: Partial<Vulnerability>) {
        return this.repository.update({id}, item);
    }

    async remove(id: string) {
        return this.repository.delete({id});
    }

    async count(): Promise<number> {
        return this.repository.count();
    }

    generateInitial() {
        const data = [];

        for (let i = 0; i < 15; i += 1) {
            data.push({
                name: faker.hacker.abbreviation(),
                description: faker.hacker.phrase(),
                records: [{
                    name: faker.hacker.noun(),
                    description: faker.hacker.adjective()
                }]
            });
        }

        return this.repository.save(data);
    }
}
