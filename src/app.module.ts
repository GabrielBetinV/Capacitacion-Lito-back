import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PermissionModule } from './permission/permission.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  // imports: [UsersModule],
  // controllers: [AppController],
  // providers: [AppService],

  imports: [
    UserModule,
     PermissionModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'admin',
      password: 'my-weak-password',
      database: 'postgres',
      autoLoadEntities: true,
      synchronize: true // NO COLOCAR EN PRODUCCION
    })],
  controllers: [],
  providers: [],
})
export class AppModule {}
