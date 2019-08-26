import { UsersModule } from '@libs/mocks/users';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';


@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'sqlite',
            database: 'tmp/db.sql',
            entities: [`${__dirname}/**/*.entity{.ts,.js}`, `**/*.entity{.ts, .js}`],
            logging: true,
            synchronize: true
        }),
        UsersModule
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
