import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { VulnerabilitiesService } from './vulnerabilities.service';
import { VulnerabilityDto } from './vulnerability.dto';


@Controller('vulnerabilities')
export class VulnerabilitiesController {
    constructor(private vulnerabilitiesService: VulnerabilitiesService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll() {
        return this.vulnerabilitiesService.getList();
    }

    @Get(':id')
    @HttpCode(HttpStatus.PARTIAL_CONTENT)
    find(@Param()id: string) {
        return this.vulnerabilitiesService.getOne(id);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() vulnerabilityDto: Partial<VulnerabilityDto>) {
        return this.vulnerabilitiesService.create(vulnerabilityDto);
    }

    @Put(':id')
    @HttpCode(HttpStatus.ACCEPTED)
    update(@Param()id: string, @Body()item) {
        return this.vulnerabilitiesService.update(id, item);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    remove(@Param()id: string) {
        return this.vulnerabilitiesService.remove(id);
    }
}
