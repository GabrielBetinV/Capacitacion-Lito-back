import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PermissionModule } from './permission/permission.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { DataSourceConfig } from './config/data.source';

@Module({
  // imports: [UsersModule],
  // controllers: [AppController],
  // providers: [AppService],

  imports: [

    ConfigModule.forRoot({
      envFilePath: `${process.env.NODE_ENV}.env`,
      isGlobal: true
    }),
    
    TypeOrmModule.forRoot(DataSourceConfig),
    UserModule,
    PermissionModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
