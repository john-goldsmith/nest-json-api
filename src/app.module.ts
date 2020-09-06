import { Module } from '@nestjs/common';
import { LoggerModule } from 'nestjs-pino';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

import configuration from './config/configuration';
import UsersModule from './users/users.module';

@Module({
  imports: [
    UsersModule,
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true
    }),
    LoggerModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        console.log(configService.get('database.postgres'));
        return {
          type: 'postgres', // TODO: configService.get('database.postgres.dialect'),
          host: configService.get('database.postgres.host'),
          port: configService.get('database.postgres.port'),
          username: configService.get('database.postgres.username'),
          password: configService.get('database.postgres.password'),
          database: configService.get('database.postgres.name'),
          entities: [__dirname + '/**/*.entity{.ts,.js}'],
          // entities: [User],
          // autoLoadEntities: true,
          // synchronize: true
        }
      }
    })
  ]
})
export class AppModule {}
