import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PermissionModule } from './permission/permission.module';

@Module({
  // imports: [UsersModule],
  // controllers: [AppController],
  // providers: [AppService],

  imports: [UserModule, PermissionModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
