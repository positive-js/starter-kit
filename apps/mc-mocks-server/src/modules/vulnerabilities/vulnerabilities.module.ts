
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { VulnerabilitiesController } from './vulnerabilities.controller';
import { VulnerabilitiesService } from './vulnerabilities.service';
import { Vulnerability } from './vulnerability.entity';


@Module({
    imports: [TypeOrmModule.forFeature([Vulnerability])],
    controllers: [VulnerabilitiesController],
    providers: [VulnerabilitiesService]
})
export class VulnerabilitiesModule {
    constructor(private vulnerabilitiesService: VulnerabilitiesService) {
        this.vulnerabilitiesService.count().then((res: number) => {
            if (res === 0) {
                this.vulnerabilitiesService.generateInitial();
            }
        });
    }
}
